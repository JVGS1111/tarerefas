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
import { taskBgColorArray } from '@/models/Task'
import { twMerge } from 'tailwind-merge'

export default function AddTask() {
  const router = useRouter()
  function goBack() {
    router.push('/')
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

  return (
    <form>
      <Header
        title="What do you have to do?"
        variante="create"
        goBackFunction={goBack}
      />
      <div className="mx-auto max-w-app p-6">
        <label className="flex flex-col gap-2.5 pb-4 text-xl font-medium text-title">
          What’s the name of the task?
          <InputText placeholder="Groceries" />
        </label>
        <label className="flex flex-col gap-2.5 pb-4 text-xl font-medium text-title">
          What sort of task is it?
          <Select
            onValueChange={(value) => {
              console.log(value)
            }}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select..." />
            </SelectTrigger>
            <SelectContent>{renderSelectOptions()}</SelectContent>
          </Select>
        </label>
        <label className="flex flex-col gap-2.5 pb-4 text-xl font-medium text-title ">
          What's the best color for that?
          <ColorRadioGroup>
            {taskBgColorArray.map((item) => {
              const classname = twMerge(
                'absolute h-6 w-6 translate-x-[-50%] translate-y-[-50%] rounded-full ',
                item,
              )
              return (
                <ColorRadioItem key={item} value={item} id={item}>
                  <span className={classname} />
                </ColorRadioItem>
              )
            })}
          </ColorRadioGroup>
        </label>
      </div>
    </form>
  )
}
