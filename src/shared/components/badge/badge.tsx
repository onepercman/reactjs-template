"use client"

import { createComponentFactory } from "react-tvcx"
import { badge } from "./variants"

export const Component = createComponentFactory(badge).withRoot("span")

Component.displayName = "Badge"
