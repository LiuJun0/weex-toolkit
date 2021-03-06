import * as expect from 'expect'
import * as os from 'os'
import * as path from 'path'
import { split } from 'ramda'
import { Toolbox } from '../core/toolbox'
import createExtension from './fs-extension'

test('has the proper interface', () => {
  const toolbox = new Toolbox()
  createExtension(toolbox)
  const ext = toolbox.fs

  expect(ext).toBeTruthy()

  // a few dumb checks to ensure we're talking to jetpack
  expect(typeof ext.copy).toBe('function')
  expect(typeof ext.path).toBe('function')
  expect(typeof ext.subdirectories).toBe('function')
  expect(split('\n', ext.read(__filename))[0]).toBe(`import * as expect from 'expect'`)
  // the extra values we've added
  expect(ext.eol).toBe(os.EOL)
  expect(ext.separator).toBe(path.sep)
})
