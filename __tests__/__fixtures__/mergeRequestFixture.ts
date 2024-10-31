import type { GitlabMergeRequest } from '@/core/typings/GitlabMergeRequest';
import { projectFixture } from './projectFixture';

export const mergeRequestFixture: GitlabMergeRequest = {
  id: 1,
  iid: 1,
  project_id: projectFixture.id,
  title: 'test1',
  description: 'fixed login page css paddings',
  state: 'opened',
  closed_by: null,
  closed_at: null,
  created_at: '2017-04-29T08:46:00Z',
  updated_at: '2017-04-29T08:46:00Z',
  target_branch: 'master',
  source_branch: 'test1',
  upvotes: 0,
  downvotes: 0,
  author: {
    id: 1,
    name: 'Administrator',
    username: 'admin',
    state: 'active',
    avatar_url: '',
    web_url: 'https://gitlab.example.com/admin',
  },
  assignee: {
    id: 1,
    name: 'Administrator',
    username: 'admin',
    state: 'active',
    avatar_url: '',
    web_url: 'https://gitlab.example.com/admin',
  },
  assignees: [
    {
      name: 'Miss Monserrate Beier',
      username: 'axel.block',
      id: 12,
      state: 'active',
      avatar_url:
        'http://www.gravatar.com/avatar/46f6f7dc858ada7be1853f7fb96e81da?s=80&d=identicon',
      web_url: 'https://gitlab.example.com/axel.block',
    },
  ],
  source_project_id: 2,
  target_project_id: 3,
  labels: ['Community contribution', 'Manage'],
  work_in_progress: false,
  milestone: {
    id: 5,
    iid: 1,
    project_id: projectFixture.id,
    title: 'v2.0',
    description:
      'Assumenda aut placeat expedita exercitationem labore sunt enim earum.',
    state: 'closed',
    created_at: '2015-02-02T19:49:26.013Z',
    updated_at: '2015-02-02T19:49:26.013Z',
    due_date: '2018-09-22',
    start_date: '2018-08-08',
    web_url: 'https://gitlab.example.com/my-group/my-project/milestones/1',
  },
  merge_when_pipeline_succeeds: true,
  merge_status: 'can_be_merged',
  sha: '8888888888888888888888888888888888888888',
  merge_commit_sha: null,
  squash_commit_sha: null,
  user_notes_count: 1,
  discussion_locked: null,
  should_remove_source_branch: true,
  force_remove_source_branch: false,
  allow_collaboration: false,
  allow_maintainer_to_push: false,
  web_url: 'http://gitlab.example.com/my-group/my-project/-/merge_requests/1',
  references: {
    short: '!1',
    relative: 'my-group/my-project!1',
    full: 'my-group/my-project!1',
  },
  time_stats: {
    time_estimate: 0,
    total_time_spent: 0,
    human_time_estimate: null,
    human_total_time_spent: null,
  },
  squash: false,
  task_completion_status: {
    count: 0,
    completed_count: 0,
  },
};
