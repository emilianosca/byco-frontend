"use client"

import React, {useEffect, useState} from 'react'
import Image from 'next/image'
import { Question } from '@/types/questions-schema'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import hearth from "../../public/hearth.svg"
import iconLogo from "../../public/iconLogo.svg"
import x from "../../public/x.svg"

// typescript map with svgs and is actual svg content
const svgs = {
  "x": x,
  "hearth": hearth,
  "iconLogo": iconLogo
}

const xSvg = svgs["x"]
const hearthSvg = svgs["hearth"]
const iconLogoSvg = svgs["iconLogo"]



export function BoxQuestion(...props: Question[]) {
  
  const [isMounted, setIsMounted] = useState(false);

  const [isClicked, setIsClicked] = React.useState(false)
  
  
  // This is a side effect that runs after the first render and sets the isMounted state to true
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  // to handle click state of the buttons 
  const { question, answersNumber, createdAt } = props[0]
  let createdAtFormat = createdAt.toString()


  if (!isMounted) {
    return null;
  }
  return (
    <Card className="w-[250px]" suppressHydrationWarning >
      <CardHeader>
        <CardTitle>
          {question}
        </CardTitle>
        <CardDescription>  
          {answersNumber} veces respondida
        </CardDescription>
      </CardHeader>
      <CardContent>
        <CardDescription>
          {createdAtFormat}
        </CardDescription>
      </CardContent>
      <CardFooter className="flex justify-between" >
        <Button 
        variant="outline"
        onClick={() => setIsClicked(!isClicked)}
        disabled={isClicked}
        >
          <Image src={xSvg} alt="x" className="w-10 h-4" />
        </Button>
        <Button
        onClick={() => setIsClicked(!isClicked)}
        disabled={isClicked}
        >
          <Image src={hearthSvg} color='white' alt="hearth" className="w-10 h-4" />
        </Button>
      </CardFooter>
    </Card>
  )
}

export default BoxQuestion