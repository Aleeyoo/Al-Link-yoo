// @ts-ignore
import darkmodeScript from "./scripts/darkmode.inline"
import styles from "./styles/darkmode.scss"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { i18n } from "../i18n"
import { classNames } from "../util/lang"

const Darkmode: QuartzComponent = ({ displayClass, cfg }: QuartzComponentProps) => {
  return (
    <button class={classNames(displayClass, "darkmode")}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="dayIcon"
        fill="currentColor"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        aria-label={i18n(cfg.locale).components.themeToggle.darkMode}
      >
        <title>{i18n(cfg.locale).components.themeToggle.darkMode}</title>
        <path d="M9.37 5.51A7.35 7.35 0 0 0 9.1 7.5c0 4.08 3.32 7.4 7.4 7.4.68 0 1.35-.09 1.99-.27A7.014 7.014 0 0 1 12 19c-3.86 0-7-3.14-7-7 0-2.93 1.81-5.45 4.37-6.49z" />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="nightIcon"
        fill="currentColor"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        aria-label={i18n(cfg.locale).components.themeToggle.lightMode}
      >
        <title>{i18n(cfg.locale).components.themeToggle.lightMode}</title>
        <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5z" />
      </svg>
    </button>
  )
}

Darkmode.beforeDOMLoaded = darkmodeScript
Darkmode.css = styles

export default (() => Darkmode) satisfies QuartzComponentConstructor