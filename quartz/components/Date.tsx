import { GlobalConfiguration } from "../cfg"
import { ValidLocale } from "../i18n"
import { QuartzPluginData } from "../plugins/vfile"

interface Props {
  date: Date
  locale?: ValidLocale
}

export type ValidDateType = keyof Required<QuartzPluginData>["dates"]

export function getDate(cfg: GlobalConfiguration, data: QuartzPluginData): Date | undefined {
  if (!cfg.defaultDateType) {
    throw new Error(
      `Field 'defaultDateType' was not set in the configuration object of quartz.config.ts. See https://quartz.jzhao.xyz/configuration#general-configuration for more details.`,
    )
  }
  return data.dates?.[cfg.defaultDateType]
}

export function formatDate(d: Date, locale: ValidLocale = "zh-CN"): string {
  if (locale === "zh-CN") {
    // 中文日期格式：年-月-日
    const year = d.getFullYear()
    const month = d.getMonth() + 1
    const day = d.getDate()
    return `${year}.${month}.${day}`
  }
  
  return d.toLocaleDateString(locale, {
    year: "numeric",
    month: "short",
    day: "2-digit",
  })
}

export function Date({ date, locale }: Props) {
  return <time datetime={date.toISOString()}>{formatDate(date, locale)}</time>
}