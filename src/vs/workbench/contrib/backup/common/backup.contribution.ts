/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { Registry } from 'vs/platform/registry/common/platform';
import { IWorkbenchContributionsRegistry, Extensions as WorkbenchExtensions } from 'vs/workbench/common/contributions';
import { BackupTracker } from 'vs/workbench/contrib/backup/common/backupTracker';
import { BackupRestorer } from 'vs/workbench/contrib/backup/common/backupRestorer';
import { LifecyclePhase } from 'vs/platform/lifecycle/common/lifecycle';

// Register Backup Tracker
Registry.as<IWorkbenchContributionsRegistry>(WorkbenchExtensions.Workbench).registerWorkbenchContribution(BackupTracker, LifecyclePhase.Starting);

// Register Backup Restorer
Registry.as<IWorkbenchContributionsRegistry>(WorkbenchExtensions.Workbench).registerWorkbenchContribution(BackupRestorer, LifecyclePhase.Starting);
