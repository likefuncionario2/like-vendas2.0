"use client"
import { Button } from "@material-tailwind/react";
import Link from "next/link";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react"
import { WhatsappLogo } from "@phosphor-icons/react";


export function Main() {
  useEffect(() => {
    AOS.init({ duration: 1000})
   },[])
    return (
        <main className="mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4 min-h-[80vh]">
        <div className="flex flex-col justify-between items-center lg:flex-row my-4 gap-4 min-h-[70%] mb-12">

          <div className="flex flex-col justify-between items-center gap-10">
            <h1 className="lg:text-4xl text-3xl font-bold leading-relaxed">Chega de gerênciar as suas vendas e o stock manualmente, com o <span className="text-blue-500 font-bold">Like Vendas</span>  é possivel automatizar este todo processo!</h1>
            <p>15 dias grátis</p>
            <div data-aos="zoom-in-left" className="max-w-[300px]">
              <Button variant="gradient" size="sm" fullWidth className="mb-2 ">
              <Link href="/cadastro">
              <span>Expermente já</span>
              </Link>
            </Button>
            </div>
            
          </div>

          <div data-aos="zoom-in-right" id="radial" className="min-w-[50%] rounded-full bg-origin-content flex justify-center items-center">
          <img src="https://media.graphassets.com/oskWH4AQROzS3mRviLCi" alt="foto" />
          </div>
        </div>

        <div className="flex justify-center items-center flex-col gap-3 my-12 min-h-[70%]">
          <p data-aos="zoom-in-left" className="text-3xl text-center max-w-[400px]">
            O <span className="text-blue-500 font-bold">Like Vendas</span> é um site de gestão de vendas e stock. Para pequenas e medias empresas.
          </p>
          <p data-aos="zoom-in-left"className="my-4 text-center max-w-[800px]">
            O <span className="text-blue-500 font-bold">Like Vendas</span> é um site dedicado à gestão de estoque e vendas, especialmente desenvolvido para atender às necessidades de pequenas e medias empreas. Com recursos intuitivos e eficientes, permite que os comerciantes controlem seus produtos, acompanhem o estoque disponível e realizem vendas de forma simples e organizada. Com o <span className="text-blue-500 font-bold">Like Vendas</span>, os proprietários de pequenas e medias empresas têm acesso a uma plataforma prática e eficaz para gerenciar o estoque de seus produtos, otimizando assim suas operações e melhorando o atendimento aos clientes.
          </p>
        </div>

        {
          //<div className="my-12 min-w-full mx-2 flex justify-center items-center max-h-[400px] md:h-[600px] lg:max-h-[800px] lg:h-[800px]"> </div>
        }
        <div data-aos="zoom-in-left" className="flex flex-col justify-between items-center lg:flex-row my-12 mb-12 gap-3 min-h-[70%]">
        
        <div>
          <h3 className="text-2xl font-blod text-blue-500 my-4">Analisar</h3>
          <p className="m-4">
          A funcionalidade Analisar oferece recursos avançados de análise de dados. Aqui, você pode explorar informações detalhadas sobre suas vendas, como análise de vendas por período, região ou produto específico. Além disso, você pode acompanhar o desempenho dos produtos ao longo do tempo, identificar os itens mais vendidos e os menos populares, e tomar decisões de compra mais assertivas.
           </p>
        </div>

        <div id="radial"  className="min-w-[50%] rounded-full bg-origin-content flex justify-center items-center">
          <img src="https://media.graphassets.com/kOS6Q5RT9imCGilEP5Qw" alt="foto" />
        </div>
      </div>

      <div data-aos="zoom-in-left" className="flex flex-col justify-between items-center lg:flex-row my-12 mb-12 gap-3 min-h-[70%]">
      <div id="radial"  className="min-w-[50%] rounded-full bg-origin-content flex justify-center items-center">
          <img src="https://media.graphassets.com/ObTelDQKQa7hTDkvXogm" alt="foto" />
        </div>
        <div>
          <h3 className="text-2xl font-blod text-blue-500 my-4"> Feed</h3>
          <p className="m-4">
          A funcionalidade Feed é um canal de comunicação interno no sistema, permitindo que você compartilhe informações e atualizações importantes com sua equipe de vendas e gerentes de estoque. Você pode criar publicações, compartilhar documentos relevantes, fornecer diretrizes e manter todos os membros da equipe atualizados sobre as últimas notícias e mudanças no estoque e nas estratégias de vendas.
           </p>
        </div>
      </div>
      <div data-aos="zoom-in-left" className="flex flex-col justify-between items-center lg:flex-row my-12 mb-12 gap-3 min-h-[70%]">
        
        <div>
          <h3 className="text-2xl font-blod text-blue-500 my-4"> Funcionários</h3>
          <p className="m-4">
          A funcionalidade Funcionários permite gerenciar e controlar as informações relacionadas à equipe. Você pode cadastrar funcionários, atribuir permissões e acessos específicos, acompanhar o desempenho individual, gerenciar escalas de trabalho e férias, além de manter um registro atualizado das informações pessoais dos funcionários.
           </p>
        </div>

        <div id="radial"  className="min-w-[50%] rounded-full bg-origin-content flex justify-center items-center">
          <img src="https://media.graphassets.com/pCNe4leSH21MMBY9ZziX" alt="foto" />
        </div>
      </div>
      <div data-aos="zoom-in-left" className="flex flex-col justify-between items-center lg:flex-row my-12 mb-12 gap-3 min-h-[70%]">
      <div id="radial"  className="min-w-[50%] rounded-full bg-origin-content flex justify-center items-center">
          <img src="https://media.graphassets.com/LjttpjTDS2qki4eIsoyg" alt="foto" />
        </div>
        <div>
          <h3 className="text-2xl font-blod text-blue-500 my-4"> Produtos</h3>
          <p className="m-4">
          A funcionalidade Produtos permite gerenciar todo o ciclo de vida dos seus produtos. Você pode cadastrar novos produtos, definir informações como descrição, preço, código de barras e categoria. Além disso, você pode acompanhar o estoque disponível, gerenciar fornecedores, definir níveis mínimos e máximos de estoque, e receber alertas automáticos quando for necessário reabastecer.
           </p>
        </div>
      </div>
      <div data-aos="zoom-in-left" className="flex flex-col justify-between items-center lg:flex-row my-12 mb-12 gap-3 min-h-[70%]">
      
        <div>
          <h3 className="text-2xl font-blod text-blue-500 my-4"> Notas</h3>
          <p className="m-4">
          A funcionalidade Notas é uma ferramenta para registrar informações importantes relacionadas ao estoque e às vendas. Aqui, você pode criar anotações sobre produtos específicos, fornecedores, clientes, solicitações de compra ou qualquer outro aspecto relevante para o seu negócio. Essas notas servem como um registro útil para consulta futura e podem ser compartilhadas com outros membros da equipe, se necessário.
           </p>
        </div>

        <div id="radial"  className="min-w-[50%] rounded-full bg-origin-content flex justify-center items-center">
          <img src="https://media.graphassets.com/lZ9CdG89SY6isj62IrVQ" alt="foto" />
        </div>
      </div>
      <div data-aos="zoom-in-left" className="flex flex-col justify-between items-center lg:flex-row my-12 mb-12 gap-3 min-h-[70%]">
      <div id="radial"  className="min-w-[50%] rounded-full bg-origin-content flex justify-center items-center">
          <img src="https://media.graphassets.com/EVBfeAfTQxGzW0S220eF" alt="foto" />
        </div>

        <div>
          <h3 className="text-2xl font-blod text-blue-500 my-4"> Suporte</h3>
          <p className="m-4">
          A funcionalidade Suporte é o canal de comunicação para obter assistência e suporte técnico do sistema Like Vendas. Se você encontrar algum problema, tiver dúvidas ou precisar de orientação, você pode entrar em contato com a equipe de suporte através dessa funcionalidade. A equipe de suporte estará pronta para ajudar e garantir que você aproveite ao máximo todas as funcionalidades do sistema de gestão de estoque e vendas.
           </p>
        </div>

        
      </div>


      <div data-aos="zoom-in-left" className="flex justify-center items-center  my-12 mb-12">
      <div className="max-w-[400px]">
              <Button variant="gradient" size="sm" fullWidth className="mb-2 ">
              <Link href="/cadastro">
              <span>Expermente já</span>
              </Link>
            </Button>
      </div> 
      </div>

      <div className="fixed bottom-5 right-5">
        <a href="https://is.gd/ZQ0uVd" target="_blank">
        <WhatsappLogo size={48} className="bg-green-500 text-white p-3 rounded-full hover:bg-white hover:text-green-500 transition-all"/>
        </a>
      </div>
      </main>
    )
}