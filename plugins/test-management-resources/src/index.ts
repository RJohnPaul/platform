//
// Copyright © 2024 Hardcore Engineering Inc.
//
// Licensed under the Eclipse Public License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License. You may
// obtain a copy of the License at https://www.eclipse.org/legal/epl-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//
// See the License for the specific language governing permissions and
// limitations under the License.
//

import { type Resources } from '@hcengineering/platform'
import TestManagementSpaceHeader from './components/TestManagementSpaceHeader.svelte'
import CreateProject from './components/project/CreateProject.svelte'
import ProjectSpacePresenter from './components/project/ProjectSpacePresenter.svelte'
import CreateTestSuite from './components/test-suite/CreateTestSuite.svelte'
import EditTestSuite from './components/test-suite/EditTestSuite.svelte'
import TestSuitePresenter from './components/test-suite/TestSuitePresenter.svelte'
import TestSuiteRefPresenter from './components/test-suite/TestSuiteRefPresenter.svelte'
import EditTestCase from './components/test-case/EditTestCase.svelte'
import TestCasePresenter from './components/test-case/TestCasePresenter.svelte'
import CreateTestCase from './components/test-case/CreateTestCase.svelte'
import CreateTestRun from './components/test-run/CreateTestRun.svelte'
import TestCaseStatusPresenter from './components/test-case/TestCaseStatusPresenter.svelte'
import EditTestRun from './components/test-run/EditTestRun.svelte'
import TestRunPresenter from './components/test-run/TestRunPresenter.svelte'

import { CreateChildTestSuiteAction, EditTestSuiteAction } from './utils'
import { resolveLocation, getTestSuiteLink } from './navigation'

export default async (): Promise<Resources> => ({
  component: {
    TestManagementSpaceHeader,
    CreateProject,
    ProjectSpacePresenter,
    CreateTestSuite,
    EditTestSuite,
    TestSuitePresenter,
    EditTestCase,
    TestCasePresenter,
    CreateTestRun,
    CreateTestCase,
    TestCaseStatusPresenter,
    EditTestRun,
    TestRunPresenter,
    TestSuiteRefPresenter
  },
  function: {
    GetTestSuiteLink: getTestSuiteLink
  },
  resolver: {
    Location: resolveLocation
  },
  actionImpl: {
    CreateChildTestSuite: CreateChildTestSuiteAction,
    EditTestSuite: EditTestSuiteAction
  }
})
