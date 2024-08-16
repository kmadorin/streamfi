import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export default function Header() {
	return (
		<header className="flex items-center justify-center px-6 py-4 md:px-10 lg:px-12">
			<div className="flex items-center gap-4">
				<Avatar className="w-[100px] h-[100px]">
					<AvatarImage src="/placeholder-user.jpg" alt="Alice" />
					<AvatarFallback>AL</AvatarFallback>
				</Avatar>
				<div className="grid gap-1">
					<div className="text-2xl font-bold">Alice</div>
					<div className="text-sm text-muted-foreground">Everything about crypto in one place</div>
				</div>
			</div>
		</header>
	)
}
