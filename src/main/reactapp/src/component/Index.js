import { BrowserRouter , Routes , Route , Link } from "react-router-dom"
import{useState,useEffect,useRef,useContext,createContext} from 'react'

import Header from './Header'
import Main from './Main.js'

export default function Index( props ){
	return(<>

			<BrowserRouter>
			    <Header/>
			    <Routes >
                    <Route path='/' element = { <Main /> } />
			     </Routes >

			</BrowserRouter>

	</>)}