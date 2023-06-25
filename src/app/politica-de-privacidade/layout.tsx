import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Like Vendas - Política de Privacidade',
  description: `O Like Vendas é um site dedicado à gestão de estoque e vendas, especialmente desenvolvido para atender às necessidades de pequenas e medias empreas. Com recursos intuitivos e eficientes, permite que os comerciantes controlem seus produtos, acompanhem o estoque disponível e realizem vendas de forma simples e organizada. Com o <span className="text-blue-500 font-bold">Like Vendas</span>, os proprietários de pequenas e medias empreas têm acesso a uma plataforma prática e eficaz para gerenciar o estoque de seus produtos, otimizando assim suas operações e melhorando o atendimento aos clientes`
}

export default function ConformeMemailLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
