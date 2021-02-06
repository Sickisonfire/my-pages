import React from 'react'
import { Link } from 'react-router-dom'

/** @jsxImportSource @emotion/react */
import 'twin.macro'

const MyPages = () => {
  return (
    <div tw='container mx-auto  bg-white rounded-lg shadow-md m-24 p-12'>
      <div tw='flex flex-col space-y-2 mb-6'>
        <h1 tw='text-4xl font-bold'>Zusammenstellung</h1>
        <p tw='pl-2'>
          Alles was hier dargestellt wird besteht ohne Backendanbindung. Hier werden lediglich
          Frontend-Projekte dargestellt. <br /> Den gesammten Code kann man{' '}
          <a tw='text-blue-500' href='https://github.com/Sickisonfire/my-pages/tree/master'>
            hier
          </a>{' '}
          unter dem Master-Branch finden.
        </p>
      </div>
      <div tw='flex flex-col space-y-4 pl-2'>
        <div tw='flex flex-col space-y-1'>
          <Link to='/Dashboard'>
            <h2 tw='text-2xl font-bold text-blue-600'>Dashboard</h2>
          </Link>
          <p tw='pl-2'>Einfacher Nachbau der Listenfunktion von Trello.</p>
        </div>
        <div tw='flex flex-col space-y-1'>
          <Link to='/'>
            <h2 tw='text-2xl font-bold text-blue-600'>Landing</h2>
          </Link>
          <p tw='pl-2'>Einfache Landingpage.</p>
        </div>
        <div tw='flex flex-col space-y-1'>
          <Link to='/register'>
            <h2 tw='text-2xl font-bold text-blue-600'>Register & Login</h2>
          </Link>
          <p tw='pl-2'>Formulare zum registrieren und anmelden.</p>
        </div>
        <div tw='flex flex-col space-y-1'>
          <Link to='/components'>
            <h2 tw='text-2xl font-bold text-blue-600'>Components</h2>
          </Link>
          <p tw='pl-2'>
            Aus interesse an der Funktion von Komponentenbibliotheken wie{' '}
            <a tw='text-blue-500' href='https://material-ui.com/'>
              Material UI
            </a>{' '}
            habe ich eigene Komponenten entwickelt.
          </p>
        </div>
      </div>
    </div>
  )
}

export default MyPages
