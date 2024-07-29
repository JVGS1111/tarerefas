import { ErrorMessage } from '@/components/form/Input/ErrorMessage'
import { InputText } from '@/components/form/Input/TextInput'
import { Header } from '@/components/Header'
import { createList } from '@/services/storage'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const addListFormSchema = z.object({
  listName: z.string().min(3, { message: 'The name of the list is too short' }),
})

type AddListForm = z.infer<typeof addListFormSchema>

export default function AddList() {
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddListForm>({
    resolver: zodResolver(addListFormSchema),
  })

  function handleCreateList(data: AddListForm) {
    createList(data.listName)
  }

  function goBack() {
    router.push('/')
  }

  return (
    <form onSubmit={handleSubmit(handleCreateList)}>
      <Header
        title="Create a list for better organization"
        variante="create"
        goBackFunction={goBack}
      />
      <div className="mx-auto max-w-app p-6">
        <label className="flex flex-col gap-2.5 text-xl font-medium text-title">
          What’s the name of the list?
          <InputText placeholder="Groceries" {...register('listName')} />
          {errors.listName?.message && (
            <ErrorMessage error={errors.listName.message} />
          )}
        </label>
      </div>
    </form>
  )
}
