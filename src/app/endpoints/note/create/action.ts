import { supabase } from "@/utils/supabase";

export async function actionNoteCreate({content,id_store,title,id_functionary,name}:any) {
  const { data,statusText,error } = await supabase
  .from("note")
  .insert({
    title,
   content,
   id_store,
   id_functionary,
   name
  })
  .select()
  console.log({data,statusText,error})
  return data == null ? statusText : data
}