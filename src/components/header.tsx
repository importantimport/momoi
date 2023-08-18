import { header, headerButton, headerTitle } from './header.css'

export const Header = () => (
  <header className={header}>
    {/* https://icones.js.org/collection/icon-park-twotone?s=peach */}
    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 48 48"><mask id="ipTPeach0"><g fill="none" stroke="#fff" strokeWidth="4"><path fill="#555" strokeLinejoin="round" d="M10.077 13.431c4.97-5.56 13.61-3.116 16.923-1.43c1.657-.633 6.197-1.358 9.18.664c3.727 2.528 8.423 9.24 4.074 18.719C36.775 38.968 27.69 42.157 24.376 43c-2.485-1.053-7.946-3.168-13.77-8.448c-5.28-4.788-6.741-14.169-.529-21.12Z"></path><path strokeLinecap="round" strokeLinejoin="round" d="M27 12c-1.924.75-5.772 2.25-7.87 6.75c-2.256 4.836-.525 9 0 11.25"></path><path strokeLinecap="round" d="M21 4c.333.167 2.5.5 3 2.5c.437 1.749-.333 2.833-.5 4"></path><path d="M28.479 11.329a1.477 1.477 0 0 1-1.416-1.808c.27-1.287.882-3.044 2.267-4.129c1.384-1.084 3.236-1.259 4.55-1.213a1.477 1.477 0 0 1 1.417 1.807c-.27 1.288-.883 3.045-2.267 4.13c-1.384 1.084-3.236 1.258-4.551 1.213Z"></path></g></mask><path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTPeach0)"></path></svg>
    <span className={headerTitle}>Momoi</span>
    <button className={headerButton}>?</button>
  </header>
)
