import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

import React from 'react'

function LoginForm() {
  return (
    <form>
        <div className='space-y-2'>
            <Label htmlFor='email'>Email</Label>
            <Input
            id='email'
            type='email'
            placeholder='tu@email.com'
            />
        </div>
        <div className='space-y-2 mt-1'>
            <Label htmlFor='password'>Contraseña</Label>
            <div className='relative'>
                <Input
                id='password'
                type='password'
                placeholder='.....'
                />
            </div>
        </div>

        <Button type='submit' className='w-full mt-2'> Iniciar Sesión</Button>
        
    </form>
  )
}

export default LoginForm
