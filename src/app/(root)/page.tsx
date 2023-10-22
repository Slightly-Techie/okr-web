import Button from '@/components/ui/Button'
import React from 'react'

function Page() {
  return (
    <section>
      <Button content="This is a button" variant='primary' size='sm'/>
      <Button content="This is a button" variant='outline' size='md'/>
      <Button content="This is a button" variant='disabled' size='lg'/>
    </section>
  )
}

export default Page