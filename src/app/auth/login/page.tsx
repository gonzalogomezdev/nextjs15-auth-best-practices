import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import LoginForm from '@/app/components/auth/LoginForm'


function LoginPage() {
  return (
    <div className=''>
        <div className='min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8'>
            <div className='max-w-md w-full space-y-8'>
                <Card>
                    <CardHeader>
                        <CardTitle className='text-2xl font-bold text-center'>Iniciar Sesión</CardTitle>
                        <CardDescription className='text-center'>Ingresa tus credenciales para acceder a tu cuenta</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <LoginForm/>
                        <div className='mt-4 text-center text-sm'>
                            ¿No tienes una cuenta?{" "}
                            <Link href="/auth/register" className='text-blue-600 hover:text-blue-500 font-medium'>Registrate aquí</Link>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    </div>
  )
}

export default LoginPage
