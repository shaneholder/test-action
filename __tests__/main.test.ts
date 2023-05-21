import * as core from '@actions/core'
// import { run, test } from 'node:test'
import {run} from '../src/main'

// import { describe } from "node:test";

jest.mock('@actions/core')

describe('When running the action', () => {
  const fakeSetOutput = core.setOutput as jest.MockedFunction<typeof core.setOutput>

  test('it should set the release-url output parameter', async() => {
    await run()
    expect(fakeSetOutput).toHaveBeenCalledWith('release-url', expect.anything())
  })
})