// @flow

import React from 'react'
import { RotateSpinLoader } from 'react-css-loaders'

import { bs4 } from '../../shared'
import styles from './List.scss'

type ListItem = {
  id: string,
  title: string
}

type Props = {
  items: Array<ListItem>,
  isLoading: boolean,
  onItemClick: Function,
  selectedId?: string
}

class List extends React.Component<Props> {
  render() {
    return (
      <div className={styles.list}>
        {this.props.isLoading && <RotateSpinLoader color="#007bff" size={5} className={styles.loading} />}
        {this.props.items && (
          <div className={[bs4['list-group'], styles.list__items].join(' ')}>
            {this.props.items.map(item => (
              <button 
                type="button" 
                className={[
                  bs4['list-group-item'], 
                  bs4['list-group-item-action'], 
                  this.props.selectedId === item.id ? bs4.active : '',
                  styles.list__item
                ].join(' ')}
                onClick={() => this.props.onItemClick(item.id)}
              >
                {item.title}
              </button>
            ))}
          </div>
        )}
      </div>
    )
  }
}

export default List
