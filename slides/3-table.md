## Continuous Delivery - Live Demo

# Branch Deployment Naming Patterns

Using the conventions mentioned before and in the [cidemo](https://github.com/allianz-de/cidemo), we will create the following pattern.

| Branch Name | App Name |
|:--|:--|
| `master` | demo-app |
| `release` | demo-app-prod |
| `feat/story-1` | demo-app-feat-story-1 |
| `feat/story-2` | demo-app-feat-story-2 |

where each app is deployed at its own URL, for example [https://demo-app-feat-story-1.cfapps.io](https://demo-app-feat-story-1.cfapps.io)