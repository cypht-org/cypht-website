---
weight: 40
id: 20
title: Public code
description: "An assessment of the Cypht project against the Standard for Public Code."
layout: section/documentation
format: md
---

# Cypht and the Standard for Public Code

Assessment of the Cypht project against the [Standard for Public Code](https://standard.publiccode.net/).

**Reviewed:** 2026-11-09

**Project:** [Cypht](https://github.com/cypht-org/cypht)

**Assessment discussion:** [Cypht website issue #157](https://github.com/cypht-org/cypht-website/issues/157)

## [Code in the open](https://standard.publiccode.net/criteria/code-in-the-open.html)

 ☐ criterion met.

| Meets | Requirement | Notes and links |
| --- | --- | --- |
| yes | Source code for software and adopted policies is published and publicly accessible. | [Cypht source](https://github.com/cypht-org/cypht); selected policies are documented in [policy cases](https://github.com/cypht-org/cypht/blob/master/docs/policy-cases.json). |
| yes | The codebase is kept free of sensitive information about users, their organizations, and third parties. | No full repository audit is cited here; continue to review changes for secrets and private data. |
| yes | Source code not currently in use, including older or proposed versions, is published. | Public [Git tags](https://github.com/cypht-org/cypht/tags) and [releases](https://github.com/cypht-org/cypht/releases). |
|  | It is optional to document which code or policy underpins a specific public interaction. | |

## [Bundle policy and source code](https://standard.publiccode.net/criteria/bundle-policy-and-source-code.html)

 ☐ criterion met.

| Meets | Requirement | Notes and links |
| --- | --- | --- |
| yes | The codebase includes the policies its source implements. | Selected behaviors and requirements are recorded in [policy-cases.json](https://github.com/cypht-org/cypht/blob/master/docs/policy-cases.json); it is not a complete inventory of all application behavior. Follow-up tracked in [issue #166](https://github.com/cypht-org/cypht-website/issues/166), closed after [PR #2095](https://github.com/cypht-org/cypht/pull/2095). |
| yes | If a policy depends on source code, that source is included in the codebase. | Policy cases identify PHPUnit tests in the public source repository. |
| yes | Policies are provided in machine-readable, unambiguous formats where appropriate. | [JSON policy cases](https://github.com/cypht-org/cypht/blob/master/docs/policy-cases.json) and their [schema](https://github.com/cypht-org/cypht/blob/master/docs/policy-cases.schema.json). |
| yes | Continuous integration checks that source and documented policy behave consistently. | [Policy-cases workflow](https://github.com/cypht-org/cypht/blob/master/.github/workflows/policy-cases.yml). |

## [Make the codebase reusable and portable](https://standard.publiccode.net/criteria/make-the-codebase-reusable-and-portable.html)

 ☐ criterion met.

| Meets | Requirement | Notes and links |
| --- | --- | --- |
| yes | The codebase is designed to be reusable in different contexts. | Modular PHP and JavaScript application; see the [README](https://github.com/cypht-org/cypht/blob/master/README.md) and [module documentation](https://github.com/cypht-org/cypht/tree/master/modules). |
| yes | The software can be run and understood without secret, undisclosed, proprietary software or single-vendor services. | Deployment options include [Docker](https://github.com/cypht-org/cypht/tree/master/docker) and Composer/PHP. The application connects to mail providers and can use optional services, but is not tied to one provider. |
| yes | The codebase is in use by multiple independent parties. | The public [Matrix community chat](https://matrix.to/#/#cypht-org_community:gitter.im) includes Cypht users; other users are not yet represented in the room. |
|  | The roadmap reflects the needs of multiple parties. | The public [issue tracker](https://github.com/cypht-org/cypht/issues) and [Matrix community chat](https://matrix.to/#/#cypht-org_community:gitter.im) provide channels for community input. How that input influences roadmap decisions is not documented, and no public roadmap is yet available. |
| yes | Development is a collaboration between multiple parties. | Community members contribute through public [pull requests](https://github.com/cypht-org/cypht/pulls), alongside project maintainers. |
| yes | Configuration adapts the source to context-specific needs. | Accounts, protocols, modules, and deployment settings are configurable. |
| yes | The codebase can be localized. | Cypht ships interface translations in its [language directory](https://github.com/cypht-org/cypht/tree/master/language). |
| yes | Source and documentation avoid situation-specific information. | Configuration is generally externalized; no full audit is cited here. |
| yes | Module documentation enables developers to understand reuse and extension. |  |
| yes | The software does not require services or platforms available from only one vendor. | Core deployment is self-hostable; common mail and directory protocols are supported. |

## [Welcome contributors](https://standard.publiccode.net/criteria/welcome-contributors.html)

 ☐ criterion met.

| Meets | Requirement | Notes and links |
| --- | --- | --- |
| yes | Anyone can submit suggestions for codebase changes. | Public [issue tracker](https://github.com/cypht-org/cypht/issues) and [pull requests](https://github.com/cypht-org/cypht/pulls). |
| yes | Contribution guidelines explain welcome contributions and how to get involved. | [CONTRIBUTING.md](https://github.com/cypht-org/cypht/blob/master/CONTRIBUTING.md). |
| no | Governance of the codebase, contributions, and community is documented. | Governance remains an open follow-up in [website issue #170](https://github.com/cypht-org/cypht-website/issues/170); a proposed outline is in the comments. |
|  | Contribution guidelines explain who covers the cost of reviewing contributions. | Not documented. |
| yes | The project advertises organizations committed to development and maintenance. | [EvoluData](https://evoludata.com/) is mentionned in the website footer. |
| no | A public roadmap is available. | Issues are public, but no consolidated roadmap was identified. |
| yes | Codebase activity statistics are publicly available. | [GitHub Pulse](https://github.com/cypht-org/cypht/pulse) and repository history. |
| n/a | A contributor code of conduct is included. |  |

## [Make contributing easy](https://standard.publiccode.net/criteria/make-contributing-easy.html)

 ☐ criterion met.

| Meets | Requirement | Notes and links |
| --- | --- | --- |
| yes | A public issue tracker accepts suggestions from anyone. | [Cypht issues](https://github.com/cypht-org/cypht/issues). |
| no | Documentation links both to the issue tracker and to submitted changes. | [CONTRIBUTING.md](https://github.com/cypht-org/cypht/blob/master/CONTRIBUTING.md) links to issues and asks that changes be associated with an issue, but does not directly link to the [pull-request list](https://github.com/cypht-org/cypht/pulls). |
| yes | Users and developers have public communication channels. | [Community chat](https://gitter.im/cypht-org/community), [issues](https://github.com/cypht-org/cypht/issues), and [monthly community meetings](https://github.com/cypht-org/cypht/wiki/Monthly-Community-Meetings). |
| yes | Security issues can be reported over a closed channel for responsible disclosure. | [SECURITY.md](https://github.com/cypht-org/cypht/blob/master/SECURITY.md) directs reports to the security mailbox. |
| yes | Documentation explains how to report potentially security-sensitive issues. | [SECURITY.md](https://github.com/cypht-org/cypht/blob/master/SECURITY.md). |

## [Maintain version control](https://standard.publiccode.net/criteria/maintain-version-control.html)

 ☑ criterion met.

| Meets | Requirement | Notes and links |
| --- | --- | --- |
| yes | All codebase files are version controlled. | Public [Git repository](https://github.com/cypht-org/cypht). |
| yes | Decisions are documented in commit messages. | Public [commit history](https://github.com/cypht-org/cypht/commits/master); contributions are expected to describe their change and link an issue. |
| yes | Commit messages link to related discussions and issues wherever possible. | The [contribution guide](https://github.com/cypht-org/cypht/blob/master/CONTRIBUTING.md) asks contributors to link code changes to an issue; pull requests record review discussion. |
| yes | The codebase uses a distributed version-control system. | Git. |
| yes | Contribution guidelines encourage grouping related changes. | The contribution guide asks for changes that are minimal and specific to the issue being addressed. |
| yes | Released versions are marked, for example with tags. | [Release tags](https://github.com/cypht-org/cypht/tags). |
| yes | The contribution process encourages file formats whose changes can be reviewed. | Contributions are submitted as Git diffs through pull requests. |
| n/a | Contributors must sign commits and provide a contact email. | Signing commits is not required. |

## [Require review of contributions](https://standard.publiccode.net/criteria/require-review-of-contributions.html)

 ☐ criterion met.

| Meets | Requirement | Notes and links |
| --- | --- | --- |
| yes | Contributions accepted into releases are reviewed by another contributor. | Contributions are submitted and reviewed as public [pull requests](https://github.com/cypht-org/cypht/pulls). |
| yes | Reviews consider source, policy, tests, and documentation. | Review practice considers these project aspects; policy cases are documented in [docs/policy-cases.md](https://github.com/cypht-org/cypht/blob/master/docs/policy-cases.md). |
| yes | Reviewers explain decisions not to accept a contribution. | Review feedback is provided on pull requests. |
| yes | Review confirms contributions fit project standards, architecture, and decisions. | The [coding style guide](https://github.com/cypht-org/cypht/blob/master/CODING_STYLE.md), tests, and pull-request review support this. |
| yes | Reviews include running the software and tests. | The [contribution guide](https://github.com/cypht-org/cypht/blob/master/CONTRIBUTING.md) requests manual testing; [CI workflows](https://github.com/cypht-org/cypht/tree/master/.github/workflows) run automated tests. |
|  | Contributions are reviewed by someone in a different context from the contributor. | No consistent evidence collected. |
|  | Version control prevents unreviewed changes from entering release versions. | Repository branch-protection settings were not verified. |
|  | Reviews usually happen within two business days. | No published response-time policy identified. |
| n/a | Multiple reviewers are required for each contribution. | Multiple reviewers may participate, but are not required in every case. |

## [Document codebase objectives](https://standard.publiccode.net/criteria/document-codebase-objectives.html)

 ☑ criterion met.

| Meets | Requirement | Notes and links |
| --- | --- | --- |
| yes | The codebase documents its objectives in terms understandable to people who may contribute or design for it. | The [README](https://github.com/cypht-org/cypht/blob/master/README.md) describes Cypht as combining email accounts without replacing them, and as an email client and news reader. |
| yes | Documentation explains how policy objectives relate to codebase objectives. | [Policy cases](https://github.com/cypht-org/cypht/blob/master/docs/policy-cases.md) explain how selected user-visible, security, and privacy requirements are tested. |
| n/a | Objectives are documented specifically for a general-public audience. | The README provides a public-facing product description; this is optional. |

## [Document the code](https://standard.publiccode.net/criteria/document-the-code.html)

 ☐ criterion met.

| Meets | Requirement | Notes and links |
| --- | --- | --- |
| no | All functionality and policy are described in clear language. | The [online documentation](https://www.cypht.org/documentation/) and module READMEs describe major features, but coverage and accuracy are not complete for all modules and behaviors. |
| yes | Documentation explains how to install and run the software. | [Installation guide](https://www.cypht.org/install), [Docker documentation](https://github.com/cypht-org/cypht/blob/master/docker/DOCKERHUB-README.md), and [developer documentation](https://www.cypht.org/documentation/developer/dev-docs/). |
| yes | Documentation includes examples of key functionality. | [Feature documentation](https://www.cypht.org/features) includes examples and screenshots. |
| yes | Documentation includes a high-level description understandable to a broad audience. | [Cypht overview](https://www.cypht.org/documentation/). |
| yes | Documentation describes how to run a standalone version, with test data if needed. | [Installation guide](https://www.cypht.org/install) and [Docker setup](https://github.com/cypht-org/cypht/tree/master/docker). |
| no | Documentation provides examples for all functionality. | Examples cover key features, but not every module or behavior. |
| yes | Documentation describes key components and how they relate. | [Developer documentation](https://www.cypht.org/documentation/developer/dev-docs/) describes the module architecture. |
| no | Continuous integration tests documentation quality. | CI builds and tests the application and policy cases; no comprehensive documentation build, link, or style check was identified. |
| n/a | Documentation includes examples designed to encourage immediate use. | The website includes feature examples and screenshots; this is optional. |

## [Use plain English](https://standard.publiccode.net/criteria/use-plain-english.html)

 ☐ criterion met.

| Meets | Requirement | Notes and links |
| --- | --- | --- |
| yes | Codebase documentation is in English. | English is the source language for project documentation. |
| yes | Source code is in English, except for machine-interpreted policy. | Source identifiers and comments are written in English. |
| n/a | Bundled policy unavailable in English has an English summary. | No non-English machine-interpreted policy identified. |
|  | Translations are kept up to date with the authoritative English version. | Cypht ships translated interface strings in the [language directory](https://github.com/cypht-org/cypht/tree/master/language); translation completeness and synchronization are not established here. |
|  | Acronyms and domain-specific terms are explained or linked. | Protocol names are documented in project and module documentation; consistency across all materials has not been assessed. |
|  | Documentation targets a lower-secondary reading level. | No readability assessment identified. |
| n/a | Translations of code, documentation, or tests are provided. | Translation is optional. |

## [Use open standards](https://standard.publiccode.net/criteria/use-open-standards.html)

 ☑ criterion met.

| Meets | Requirement | Notes and links |
| --- | --- | --- |
| yes | Data-exchange features use open standards. | Cypht supports IMAP, SMTP, JMAP, CardDAV, LDAP, Sieve, and OpenPGP, among others; see [module documentation](https://www.cypht.org/modules/). |
| n/a | Any non-open standards used are clearly identified in documentation. | No non-open data-exchange standard has been identified for this assessment. |
| yes | Standards used by the codebase are listed with links to their specifications. | The [module list](https://www.cypht.org/modules/) links to standards and protocol information. |
| n/a | Non-open standards do not hinder collaboration or reuse. | No non-open data-exchange standard has been identified for this assessment. |
| n/a | Where no standard exists, effort is made to develop one. | No such case was identified for this assessment. |
| yes | Machine-testable open standards are preferred where applicable. | Protocol implementations and tests provide machine-verifiable interoperability; no contrary standard choice was identified. |
| n/a | Machine-testable non-open standards are preferred over non-testable ones. | No non-open data-exchange standard has been identified for this assessment. |

## [Use continuous integration](https://standard.publiccode.net/criteria/use-continuous-integration.html)

 ☐ criterion met.

| Meets | Requirement | Notes and links |
| --- | --- | --- |
| no | All functionality has automated tests. | PHPUnit and Selenium cover substantial functionality, but not all features are tested. |
|  | Contributions must pass all automated tests before acceptance. | Pull-request CI is configured; branch-protection and merge requirements were not verified. |
| yes | Guidelines explain how to structure contributions. | [CONTRIBUTING.md](https://github.com/cypht-org/cypht/blob/master/CONTRIBUTING.md). |
| yes | Active contributors are available to review contributions. | Public [pull requests](https://github.com/cypht-org/cypht/pulls) and [GitHub Pulse](https://github.com/cypht-org/cypht/pulse). |
| yes | Automated test results for contributions are public. | Workflow results are available through [GitHub Actions](https://github.com/cypht-org/cypht/actions). |
| yes | Guidelines state that each contribution should focus on a single issue. | Contributors are asked to link changes to an issue and keep changes minimal and specific. |
| yes | Source-code test coverage is monitored. | The README links to [Coveralls coverage](https://coveralls.io/github/jasonmunro/cypht?branch=master). |
| yes | Consistency between policy documentation and source can be tested. | [Policy cases](https://github.com/cypht-org/cypht/blob/master/docs/policy-cases.json) are validated in CI. |
|  | CI tests documentation style and broken links. | No comprehensive documentation link or style checker identified. |
| n/a | Documentation examples are used to test the software. | No such test suite identified; this is optional. |

## [Publish with an open license](https://standard.publiccode.net/criteria/publish-with-an-open-license.html)

 ☐ criterion met.

| Meets | Requirement | Notes and links |
| --- | --- | --- |
| no | Source code and documentation are licensed for reuse, modification, and redistribution. | The codebase is licensed, but the license for the separately maintained website documentation is still under discussion in [website issue #181](https://github.com/cypht-org/cypht-website/issues/181). |
| yes | Software source code uses an OSI-approved or FSF Free/Libre license. | [LGPL-2.1](https://github.com/cypht-org/cypht/blob/master/LICENSE). |
| yes | Source code is published with a license file. | [LICENSE](https://github.com/cypht-org/cypht/blob/master/LICENSE). |
| yes | Contributors retain copyright in their contributions. | Contributors retain copyright ownership; no transfer is required. |
|  | Source files include machine-readable copyright and license headers. | Not assessed; no repository-wide check identified. |
| n/a | Different source-code and documentation licenses are used where appropriate. | The website documentation license decision remains open in [issue #181](https://github.com/cypht-org/cypht-website/issues/181). |

## [Make the codebase findable](https://standard.publiccode.net/criteria/make-the-codebase-findable.html)

 ☐ criterion met.

| Meets | Requirement | Notes and links |
| --- | --- | --- |
|  | The codebase name is descriptive and avoids unexplained acronyms, puns, or branding. | “Cypht” is short and not descriptive by itself; the README explains the project. |
| yes | A short description explains what the codebase does. | The [README](https://github.com/cypht-org/cypht/blob/master/README.md) describes Cypht as a webmail client and news reader. |
| yes | The codebase is submitted to relevant software catalogs. | [Packagist](https://packagist.org/packages/jason-munro/cypht). |
| yes | The website describes the problem for different potential users. | [Cypht website](https://www.cypht.org/) and [documentation](https://www.cypht.org/documentation/). |
| yes | The codebase can be found by its name using a search engine. | Cypht has a public website and repository indexed by common search engines. |
|  | The codebase can be found by describing its problem in natural language. | No searchability assessment identified. |
|  | A persistent identifier describes the project, contributors, repository, and website. | No such identifier identified. |
|  | Machine-readable public-code metadata is provided. | No `publiccode.yml` identified. Composer metadata is available in [composer.json](https://github.com/cypht-org/cypht/blob/master/composer.json). |
| n/a | The codebase has a dedicated domain name. | The project has [cypht.org](https://www.cypht.org/); a dedicated domain is optional. |
| n/a | The community regularly presents the project at conferences. | Not assessed; this is optional. |

## [Use a coherent style](https://standard.publiccode.net/criteria/use-a-coherent-style.html)

 ☐ criterion met.

| Meets | Requirement | Notes and links |
| --- | --- | --- |
| yes | The codebase uses a coding or writing style guide. | [CODING_STYLE.md](https://github.com/cypht-org/cypht/blob/master/CODING_STYLE.md). |
|  | Contributions pass automated style checks. | Pull requests check title format; comprehensive source style checks were not identified. |
| yes | The style guide explains expectations for comments and documentation of non-trivial code. | [Coding style guide](https://github.com/cypht-org/cypht/blob/master/CODING_STYLE.md). |
| n/a | The style guide includes expectations for understandable English. | Not explicitly covered; this is optional. |

## [Document codebase maturity](https://standard.publiccode.net/criteria/document-codebase-maturity.html)

 ☐ criterion met.

| Meets | Requirement | Notes and links |
| --- | --- | --- |
| yes | The codebase is versioned. | [Release tags](https://github.com/cypht-org/cypht/tags). |
| yes | Documentation clearly identifies versions ready for use. | [Releases](https://github.com/cypht-org/cypht/releases), [installation documentation](https://www.cypht.org/install), and supported versions in [SECURITY.md](https://github.com/cypht-org/cypht/blob/master/SECURITY.md). |
|  | Ready-to-use versions depend only on ready-to-use versions of other codebases. | Dependency readiness was not assessed. |
| yes | Changes between versions are documented. | [Release notes](https://github.com/cypht-org/cypht/blob/master/RELEASE_NOTES). |
|  | The method for assigning version identifiers is documented. | No versioning policy identified. |
| n/a | Semantic versioning is used. | Semantic versioning is optional; the project publishes numbered release tags. |
