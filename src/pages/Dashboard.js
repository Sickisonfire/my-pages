import React, { useState, useEffect } from 'react'
/** @jsxImportSource @emotion/react */
import 'twin.macro'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Dashboard = () => {
  const [lists, setLists] = useState([])
  const [createListState, setCreateListState] = useState(false)
  const [titleInput, setTitleInput] = useState('')

  const handleItemInputChange = (e) => {
    const { value } = e.target
    setTitleInput(value)
  }

  const handleClickAddList = (e) => {
    e.preventDefault()
    setCreateListState(true)
  }

  const handleAddList = (e) => {
    e.preventDefault()
    const newList = { title: titleInput, id: Date.now(), items: [] }

    setLists([...lists, newList])

    setCreateListState(false)
    setTitleInput('')
  }

  const handleRemoveList = (id) => {
    setLists(lists.filter((list) => list.id !== id))
  }

  const handleAddItemToList = (listId, item) => {
    const newList = lists.filter((list) => list.id === listId)
    let items = newList[0].items
    items = [...items, item]
    newList[0].items = items
    setLists([...lists.filter((list) => list.id !== listId), newList[0]])
  }

  const handleRemoveItemFromList = (listId, itemId) => {
    const newList = lists.filter((list) => list.id === listId)
    const items = newList[0].items.filter((item) => item.id !== itemId)
    newList[0].items = items

    setLists([...lists.filter((list) => list.id !== listId), newList[0]])
  }

  useEffect(() => {
    console.log(lists)
  }, [lists])

  return (
    <div tw='right-0 left-0 bottom-0 top-16 p-4 absolute flex items-start'>
      {lists &&
        lists.map((list) => (
          <List
            key={list.id}
            id={list.id}
            title={list.title}
            items={list.items}
            removeList={handleRemoveList}
            removeItemFromList={handleRemoveItemFromList}
            addItemToList={handleAddItemToList}
          />
        ))}
      {createListState ? (
        <div tw='w-72 bg-white  text-sm text-gray-700 p-2  rounded-lg text-left'>
          <input
            onChange={handleItemInputChange}
            tw='p-2 bg-gray-500 bg-opacity-10 rounded shadow text-sm mb-2 w-full'
            type='text'
            placeholder='input title here...'
            value={titleInput}
          />
          <div tw='flex'>
            <button onClick={handleAddList} tw='bg-indigo-500 text-white rounded py-1 px-3 mr-2'>
              Add
            </button>
            <button
              onClick={() => {
                setCreateListState(false)
                setTitleInput('')
              }}
              tw='h-full hover:(bg-gray-300 bg-opacity-20) py-1 px-3 rounded'
            >
              <FontAwesomeIcon icon='times' tw='text-gray-600' />
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={handleClickAddList}
          tw='w-72 bg-gray-400 bg-opacity-20 hover:bg-opacity-40 text-sm text-gray-700 p-2 pl-4 rounded-lg text-left'
        >
          <FontAwesomeIcon icon='plus' tw='mr-1' /> Add new list
        </button>
      )}
    </div>
  )
}

const List = ({ title, id, removeList, addItemToList, removeItemFromList, items }) => {
  const [createItemState, setCreateItemState] = useState(false)
  const [titleInput, setTitleInput] = useState('')
  const [hoverState, setHoverState] = useState(false)

  const handleItemInputChange = (e) => {
    const { value } = e.target
    setTitleInput(value)
  }

  const handleClick = (e) => {
    e.preventDefault()
    setCreateItemState(true)
  }

  const handleAddItem = (e) => {
    e.preventDefault()
    const newItem = { title: titleInput, id: Date.now() }
    addItemToList(id, newItem)
    setCreateItemState(false)
    setTitleInput('')
  }

  return (
    <div
      onMouseEnter={() => setHoverState(true)}
      onMouseLeave={() => setHoverState(false)}
      tw='p-2 bg-white  w-72 rounded-lg mr-2 max-h-full flex flex-col relative'
    >
      {hoverState && (
        <button
          onClick={() => removeList(id)}
          tw='absolute top-1 right-2 hover:bg-gray-100 p-1 px-3 rounded'
        >
          <FontAwesomeIcon icon='times' tw='text-gray-600 ' />
        </button>
      )}
      <h2 tw='text-sm font-bold mb-2 mx-2 text-gray-700'>{title}</h2>
      <div tw='overflow-y-auto overflow-x-hidden'>
        {items &&
          items.map((item) => (
            <ListItem
              key={item.id}
              id={item.id}
              title={item.title}
              removeItem={(itemId) => removeItemFromList(id, itemId)}
            />
          ))}
      </div>
      {createItemState ? (
        <>
          <input
            onChange={handleItemInputChange}
            tw='p-2 bg-gray-500 bg-opacity-10 rounded shadow text-sm mb-2 '
            type='text'
            placeholder='input task here..'
            value={titleInput}
          />
          <div tw='flex'>
            <button onClick={handleAddItem} tw='bg-indigo-500 text-white rounded py-1 px-3 mr-2'>
              Add
            </button>
            <button
              onClick={() => {
                setCreateItemState(false)
                setTitleInput('')
              }}
              tw='h-full hover:(bg-gray-300 bg-opacity-20) py-1 px-3 rounded'
            >
              <FontAwesomeIcon icon='times' tw='text-gray-600' />
            </button>
          </div>
        </>
      ) : (
        <button
          onClick={(e) => handleClick(e)}
          tw='text-sm text-gray-500 bg-gray-300 bg-opacity-0 hover:bg-opacity-20 p-2 pl-3  flex items-center w-full rounded '
        >
          <FontAwesomeIcon icon='plus' tw='mr-1' />
          Add Item
        </button>
      )}
    </div>
  )
}

const ListItem = ({ title, removeItem, id }) => {
  const [hoverState, setHoverState] = useState(false)
  return (
    <div
      tw='w-full text-left mb-2 relative'
      onMouseEnter={() => setHoverState(true)}
      onMouseLeave={() => setHoverState(false)}
    >
      <div tw='p-2 bg-gray-500 bg-opacity-10 rounded shadow hover:bg-opacity-20 text-sm '>
        {hoverState && (
          <button
            onClick={() => removeItem(id)}
            tw='absolute top-1 bg-red-400 hover:bg-red-600 right-1 p-1 px-3 rounded'
          >
            <FontAwesomeIcon icon='times' tw='text-white' />
          </button>
        )}
        {title}
      </div>
    </div>
  )
}

export default Dashboard
