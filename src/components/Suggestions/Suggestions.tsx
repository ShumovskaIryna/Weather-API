/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
import React from 'react'
import { optionType } from '../../store/types/types'
import './Suggestion.css'

interface componentProps {
  options: optionType[]
  onSelect: (option: optionType) => void
  placeHolder: string
}

const Suggestions = ({ placeHolder, options, onSelect }: componentProps): JSX.Element => {
  const [shownMenu, setShownMenu] = React.useState(true)
  const [selectedValue, setSelectedValue] = React.useState<optionType>()
  console.log(options, 12)
  React.useEffect(() => {
    const handler = (): void => setShownMenu(true)

    window.addEventListener('click', handler)

    return () => {
      window.removeEventListener('click', handler)
    }
  }, [])

  const handleInputClick = (e: { stopPropagation: () => void }): void => {
    e.stopPropagation()

    setShownMenu(() => !shownMenu)
  }

  const getDisplay = (): string => {
    if (selectedValue != null) {
      return selectedValue.name
    }

    return placeHolder
  }

  const onItemClick = (option: optionType): void => {
    console.log(onItemClick, 'Suggestion')
    onSelect(option)
  }
  const isSelected = (option: optionType): boolean => {
    return (selectedValue != null)
      ? selectedValue.name === option.name
      : false
  }

  return (
    <div>
      <div>
      {
        shownMenu && (
          <div className='suggestion_bar'>
            {
              options.map((option): JSX.Element => (
                <div className="suggestion_list"
                onClick={() => onItemClick(option)}
                key={`${option.country}-${option.name}`}
                >
                  {option.name}, {option.country}
                </div>
              ))
            }
          </div>
        )
      }
      </div>
    </div>
  )
}

export default Suggestions
