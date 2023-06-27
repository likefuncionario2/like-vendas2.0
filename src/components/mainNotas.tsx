"use client"
import { Alert, Button, Card, CardBody, CardHeader, Dialog, Input, Spinner, Textarea, Typography } from "@material-tailwind/react";
import SideBarDashbord from "./sideBarDashbord";
import { useState } from "react"
import { formDate } from "@/utils/formDate";
import z from "zod"
import { useForm,SubmitHandler } from "react-hook-form";
import { useUserLocalStorage } from "@/hooks/useUserLocalStorage";
import { useFunctionary } from "@/hooks/useFunctionary";
import { actionNoteCreate } from "@/app/endpoints/note/create/action";
import { Delete } from "./delete";
import { PencilSimple } from "@phosphor-icons/react";
import { EditorNote } from "./editorNote";
import { useType } from "@/hooks/useType";

const schema = z.object({
    content: z.string(),
    title: z.string(),
  })
  type IFormInput = z.infer<typeof schema>;

export function MainNotas({ data }:any) {
    const typeLogin = useType()
    const user  = useUserLocalStorage()
    const [openDialog, setOpenDialog] = useState(false)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const [openEditor, setOpenEditor] = useState(false)
    const { register, handleSubmit,formState: { errors } } = useForm<IFormInput>();
    const functLocal = useFunctionary()

    const notas = typeLogin !== "store" ? data.filter((item:any) => {
      const id_functionary = functLocal !== undefined && functLocal.id_store
      return item.id_functionary ===  id_functionary 
    }) : data

    const handleOpen = () => {
        setOpenDialog((cur) => !cur);
      }
  

    const onSubmit: SubmitHandler<IFormInput> = async (data) => {
        setLoading(true)
        const id_functionary = functLocal !== undefined && functLocal.id_store
        const { content,title } = data
        const id = user !== undefined ? user.id : 0
        const id_store = functLocal === undefined ? Number(id) : functLocal.id_store
        const res = typeLogin !== "store" ? await actionNoteCreate({content,id_store,title,id_functionary,name:user?.name}) : await actionNoteCreate({content,id_store,title,id_functionary:0,name:"Superior"})
        if(typeof res !== "string") {
            setOpenDialog(false)
            window.location.reload()
          } else {
            setError("Error Tente novamente")
            setLoading(false)
          }
        setLoading(false)
    }
 
    return (
        <main className="min-w-full flex justify-between">
            <div className="hidden lg:block">
            <SideBarDashbord />
            </div>
            
            <div className="min-w-full max-w-full lg:max-w-[80%] lg:min-w-[80%]">
            <Typography variant="h1" className="self-end p-2 rounded-lg bg-blue-500 text-white max-w-[400px] text-center mt-6 mx-3">
              Notas
            </Typography>
            <div className="p-4 flex justify-center itemes-center flex-wrap gap-6">
            {
                
                notas.map((note:any) => {
                    const date = formDate(note.created_at)
                    return (
                        <>
                          <Card key={note.id} className="mt-6 w-96">
                              {
                              openEditor && <EditorNote id={note.id} value={{
                                title:note.title,
                                content:note.content,
                              }} />
                            }
                          <CardBody className="flex justify-between items-center">
                            <PencilSimple size={32} className="hover:text-blue-500 transition-all" onClick={() => setOpenEditor(!openEditor)}/>
                            <Delete id={note.id} type="note" />
                          </CardBody>
                        <CardBody>
                            <Typography variant="h5" color="blue-gray" className="mb-2">
                            {note.name}
                            </Typography>
                            <Typography color="blue-gray" className="mb-2">
                             {note.title}
                            </Typography>
                            <Typography className="mb-2">
                                {note.content}
                            </Typography>
                            <Typography>
                            Data: {date}
                            </Typography>
                        </CardBody>
                        </Card>
                        </>
                    )
                })
            }

    <div>
      <Dialog
          size="xs"
          open={openDialog}
          handler={handleOpen}
          className="bg-transparent shadow-none min-w-full lg:min-w-[24rem] flex justify-center items-center"
        >
          <Card className="min-w-[80%] lg:min-w-[24rem] max-w-[80%] lg:max-w-[24rem]">
            <CardHeader
              variant="gradient"
              color="blue"
              className="mb-4 grid h-28 place-items-center"
            >
              <Typography variant="h3" color="white" className="text-center">
                Adicionar Nota
              </Typography>
            </CardHeader>
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-4 p-4">
               <Input type="text" label="Titulo"{...register("title", { required: true })} /> 
              <Textarea label="Escreve aqui o teu apontamento" {...register("content", { required: true })}/>
              
            </div>
            <div className="pt-0 flex gap-3 justify-center items-start p-4">
            <Button onClick={handleOpen} className="bg-transparent text-black" >
                Cancelar
              </Button>
              <Button type="submit" variant="gradient" className="flex gap-3" >
                Adicionar
                {
                  loading && <Spinner />
                }
              </Button>
            </div>
            <div className="my-3 p-4">
                    {
                  errors.content  ||  error ? <div className="">
                    <Alert color="red" variant="gradient">
                    <span>{error.length == 0 ? "Preencha correctamento os campos acima para continuar." : error }</span>
                  </Alert>
                  </div> : null
                }
              </div>
            </form>
          </Card>
        </Dialog>
      </div>
      <div className="fixed bottom-5 right-5">
                <Button onClick={() => setOpenDialog(true)}>Adicionar Nota</Button>
    </div>
    </div>
    </div>
    </main>
    )
}