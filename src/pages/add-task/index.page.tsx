'use client'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/form/Input/Select'
import { InputText } from '@/components/form/Input/TextInput'
import { Header } from '@/components/Header'
import { taskOptionsArray } from '@/services/task-options'
import { useRouter } from 'next/router'
import { ColorRadioGroup, ColorRadioItem } from './components/ColorSelect'
import { Task, taskBgColorArray } from '@/models/Task'
import { twMerge } from 'tailwind-merge'
import { z } from 'zod'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ErrorMessage } from '@/components/form/Input/ErrorMessage'
import { useSearchParams } from 'next/navigation'
import { toast } from 'react-toastify'
import { addTaskToList } from '@/services/storage'

const addTaskFormSchema = z.object({
  title: z
    .string({ required_error: 'Type the name of the task' })
    .min(3, { message: 'The task name is too short' }),
  icon: z.string({ required_error: 'Select an icon' }),
  color: z.string({ required_error: 'Select a color' }),
})

type AddTaskForm = z.infer<typeof addTaskFormSchema>

export default function AddTask() {
  const router = useRouter()
  const params = useSearchParams()

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<AddTaskForm>({
    resolver: zodResolver(addTaskFormSchema),
    defaultValues: {
      color: undefined,
      icon: undefined,
    },
  })

  function handleCreateTask(data: AddTaskForm) {
    const id = params.get('id')
    if (!id) {
      toast.error('ID not found')
      return
    }
    try {
      const newTask = createTaskObject(data)
      addTaskToList({
        listId: id,
        task: newTask,
      })
      toast.success('The task has been added!')
      router.push('/')
    } catch (error) {
      toast.error('An error has occurred')
    }
  }

  function createTaskObject(data: AddTaskForm): Task {
    const task = {
      arquived: false,
      completed: false,
      icon: data.icon,
      title: data.title,
      color: data.color,
    }

    return task
  }

  function renderSelectOptions() {
    return taskOptionsArray.map((item) => {
      const IconImported = item.Icon
      return (
        <SelectItem value={item.key} key={item.key}>
          <IconImported size={24} />
          {item.label}
        </SelectItem>
      )
    })
  }

  function renderColorOptions() {
    return taskBgColorArray.map((item) => {
      const classname = twMerge(
        'absolute h-6 w-6 translate-x-[-50%] translate-y-[-50%] rounded-full ',
        item,
      )
      return (
        <ColorRadioItem key={item} value={item} id={item}>
          <span className={classname} />
        </ColorRadioItem>
      )
    })
  }

  function goBack() {
    router.push('/')
  }

  return (
    <form onSubmit={handleSubmit(handleCreateTask)}>
      <Header
        title="What do you have to do?"
        variante="create"
        goBackFunction={goBack}
      />
      <div className="mx-auto max-w-app p-6">
        <label className="flex flex-col gap-2.5 pb-4 text-xl font-medium text-title">
          {`What’s`} the name of the task?
          <InputText placeholder="Groceries" {...register('title')} />
          {errors.title?.message && (
            <ErrorMessage error={errors.title.message} />
          )}
        </label>
        <label className="flex flex-col gap-2.5 pb-4 text-xl font-medium text-title">
          What sort of task is it?
          <Controller
            name="icon"
            control={control}
            render={({ field }) => (
              <Select onValueChange={field.onChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Select..." />
                </SelectTrigger>
                <SelectContent>{renderSelectOptions()}</SelectContent>
              </Select>
            )}
          />
          {errors.icon?.message && <ErrorMessage error={errors.icon.message} />}
        </label>
        <label className="flex flex-col gap-2.5 pb-4 text-xl font-medium text-title ">
          {`What's`} the best color for that?
          <Controller
            name="color"
            control={control}
            render={({ field }) => (
              <ColorRadioGroup onValueChange={field.onChange}>
                {renderColorOptions()}
              </ColorRadioGroup>
            )}
          />
          {errors.color?.message && (
            <ErrorMessage error={errors.color.message} />
          )}
        </label>
      </div>
    </form>
  )
}
