import { InputText } from '@/components/form/Input/TextInput'
import { Header } from '@/components/Header'
import { useRouter } from 'next/router'

export default function AddList() {
  const router = useRouter()
  function goBack() {
    router.push('/')
  }

  return (
    <form>
      <Header
        title="Create a list for better organization"
        variante="create"
        goBackFunction={goBack}
      />
      <div className="mx-auto max-w-app p-6">
        <label className="flex flex-col gap-2.5 text-xl font-medium text-title">
          What’s the name of the list?
          <InputText placeholder="Groceries" />
        </label>
      </div>
    </form>
  )
}
