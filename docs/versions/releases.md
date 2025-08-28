---
title: Releases
tags:
  - Release notes
  - Core development
sidebar_position: 1
---

<!-- markdownlint-disable no-inline-html -->

import SupportedReleases, { styles as ReleaseStyles } from '@site/src/components/SupportedReleases';
import ReleaseTable from '@site/src/components/ReleaseTable';
import Link from '@docusaurus/Link';

[This page lists all official releases of Moodle](https://moodledev.io/general/releases), grouped by branch in reverse chronological order.

## Version support

The most recent [long-term support release (LTS)](https://en.wikipedia.org/wiki/Long-term_support) version is Moodle 4.5. The next LTS version will be Moodle 5.3.

<SupportedReleases />

<details>
    <summary>Release graph key</summary>
    <div>

<table>
    <tbody>
        <tr>
            <th scope="row" className={ReleaseStyles['release-state-current']}>
                Current stables
            </th>
            <td>Currently supported stable releases.</td>
        </tr>
        <tr>
            <th scope="row" className={ReleaseStyles['release-state-security']}>
                Current security
            </th>
            <td>Current release of versions still receiving security-only updates.</td>
        </tr>
        <tr>
            <th scope="row" className={ReleaseStyles['release-state-future']}>
                Future stables
            </th>
            <td>Future point releases receiving bug fixes, as well as security updates.</td>
        </tr>
        <tr>
            <th scope="row" className={ReleaseStyles['release-state-future-security']}>
                Future security
            </th>
            <td>Future point releases receiving security-only updates.</td>
        </tr>
        <tr>
            <th scope="row" className={ReleaseStyles['release-state-past-stables']}>
                Past stables
            </th>
            <td>Previously released versions containing bug fixes, as well as security updates. Updating to a currently supported version is recommended.</td>
        </tr>
        <tr>
            <th scope="row" className={ReleaseStyles['release-state-past-security']}>
                Past security
            </th>
            <td>Previously released versions containing security updates only. Updating to a currently supported version is recommended.</td>
        </tr>
    </tbody>
</table>

</div>
</details>

## General release calendar

These are the target dates for releases. These dates may vary slightly due to unforeseen circumstances.

| Release type                                                                                               | Frequency | Months                                           | Timing                       |
| ---------------------------------------------------------------------------------------------------------- | --------- | ------------------------------------------------ | ---------------------------- |
| [Major](https://moodledev.io/general/development/process#major-release-cycles) (eg. 3.x)                   | 6 monthly | April, and October                               | Weeks 17, and 43 of the year |
| [Minor](https://moodledev.io/general/development/process.md#stable-maintenance-cycles) (Point) (eg. 3.x.y) | 2 monthly | February, April, June, August, October, December | Usually every 8 weeks        |

:::tip

Upcoming release dates can be found in the Moodle development calendar, which is available as an [iCal feed](https://www.google.com/calendar/ical/moodle.com_p4c2oe7hsb77ltaro5qtihb5d4%40group.calendar.google.com/public/basic.ics), or to [browse](https://calendar.google.com/calendar/embed?src=moodle.com_p4c2oe7hsb77ltaro5qtihb5d4@group.calendar.google.com&pli=1).

:::

:::note

Minor releases dates differ slightly from release to release depending on the timing of public holidays in Western Australia.

:::

## See also

- [Roadmap](https://moodledev.io/general/community/roadmap.md) - future versions
- [Moodle versions](https://docs.moodle.org/dev/Moodle_versions) - an explanation of how our versions work plus version numbers for each release (for $plugin->requires)
