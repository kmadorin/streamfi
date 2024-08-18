import { useState } from "react"

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuRadioGroup, DropdownMenuRadioItem } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import {ChevronDownIcon} from "@radix-ui/react-icons"

export default function TipsForm() {

	const [currency, setCurrency] = useState("usd");
	const [message, setMessage] = useState("")

  const handleMessageChange = (e) => {
    const value = e.target.value
    setMessage(value)
  }

	const handleCurrencyChange = (value) => {
    setCurrency(value)
  }

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("submitting form");
	}

	return (
		<div className="p-6 bg-background rounded-b-lg md:p-10 lg:p-12">
        <h2 className="text-2xl font-bold mb-4">Send a Tip</h2>
        <form className="grid gap-4" onSubmit={handleSubmit}> 
          <div className="grid gap-2">
            <Label htmlFor="name">Your Name</Label>
            <Input id="name" placeholder="Enter your name" />
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="currency">Currency</Label>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="w-full justify-between">
                    <span>{currency.toUpperCase()}</span>
                    <ChevronDownIcon className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-40">
                  <DropdownMenuRadioGroup value={currency} onValueChange={handleCurrencyChange}>
                    <DropdownMenuRadioItem value="usd">USD</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="eur">EUR</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="gbp">GBP</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="cad">CAD</DropdownMenuRadioItem>
                  </DropdownMenuRadioGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="amount">Tip Amount</Label>
              <Input id="amount" type="number" placeholder="Enter amount" />
            </div>
          </div>
          <div className="grid gap-2 relative">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" placeholder="Write a message for the streamer" className="min-h-[150px]" value={message}
                onChange={handleMessageChange} />
						<div className="absolute bottom-2 right-2 text-sm text-muted-foreground">{message.length}/300</div>
					</div>
          <Button type="submit" className="w-full">
            Send Tip
          </Button>
        </form>
      </div>
	)
}