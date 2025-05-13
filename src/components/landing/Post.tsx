import React from 'react'

function Post({ title, description, date, university, username, branch, className }: {
  title: string,
  description: string,
  date: string,
  university: string,
  username: string,
  branch: string
  className?: string
}) {
  console.log(className)
  return (
    <div className={`bg-[repeating-linear-gradient(#fefefe,_#fefefe_24px,_#ddd_25px)] dark:dark:bg-[repeating-linear-gradient(#1a1a1a,_#1a1a1a_24px,_#333_25px)] border-2 gap-4 border-zinc-200 dark:border-zinc-700/70 rounded-2xl p-4 sm:p-6 flex flex-col ${className}`}>
      <div className="flex justify-start items-start gap-4">
        <div className="h-10 w-10 rounded-full bg-zinc-200 dark:bg-zinc-800"></div>
        <div className="space-y-1">
          <h2 className="text-xs">{university}</h2>
          <p className="text-xs text-zinc-600 dark:text-zinc-400">{username} • {branch} • {date}</p>
        </div>
      </div>
      <div className='space-y-1'>
        <h3 className="text-lg">{title}</h3>
        <p className="font-soupbone text-lg text-zinc-600 dark:text-zinc-400">{description}</p>
      </div>
    </div>
  )
}

export default Post