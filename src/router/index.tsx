import { RouteObject } from "react-router-dom"
import React from "react"
import Home from "@/views/home"
const routes:RouteObject[]=[
  {
    path:"/home",
    element:<Home/>
  }
]

export default routes
