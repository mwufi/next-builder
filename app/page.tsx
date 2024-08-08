// import { createClient } from '@/utils/supabase/server';

// // fetch notes from server!!
// export default async function Notes() {
//   const supabase = createClient();
//   const { data: notes } = await supabase.from("notes").select();

//   return <pre>{JSON.stringify(notes, null, 2)}</pre>
// }

export default async function Notes() {
  return (
    <p>
      https://console.cloud.google.com/apis/credentials/consent/edit?project=gmail-integration-423405
    </p>
  )
}