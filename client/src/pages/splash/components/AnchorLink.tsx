import { SelectedPage } from '@/shared/types'
import { HashLink } from 'react-router-hash-link'

type Props = {
    page: string,
    selectedPage: SelectedPage,
    setSelectedPage: (value: SelectedPage) => void
    children?: React.ReactNode
}

const AnchorLink = ({ page, selectedPage, setSelectedPage, children }: Props) => {
    const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage
  return (
      <HashLink
          className={`${selectedPage === lowerCasePage ? "text-blue-logo" : ""}
                      transition duration-500 hover:text-blue-logo`}
          onClick={() => setSelectedPage(lowerCasePage)}
          to={`/#${lowerCasePage}`}
          smooth
      >
          {children ? children : page}
      </HashLink>
  )
}

export default AnchorLink