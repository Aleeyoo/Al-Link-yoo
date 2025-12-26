// @ts-ignore
import readerModeScript from "./scripts/readermode.inline"
import styles from "./styles/readermode.scss"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { i18n } from "../i18n"
import { classNames } from "../util/lang"

const ReaderMode: QuartzComponent = ({ displayClass, cfg }: QuartzComponentProps) => {
  return (
    <button class={classNames(displayClass, "readermode")}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="readerIcon"
        fill="currentColor"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        aria-label={i18n(cfg.locale).components.readerMode.title}
      >
        <title>{i18n(cfg.locale).components.readerMode.title}</title>
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
      </svg>
    </button>
  )
}

ReaderMode.beforeDOMLoaded = readerModeScript
ReaderMode.css = styles

export default (() => ReaderMode) satisfies QuartzComponentConstructor