import React, { useEffect } from "react"
import { useForm } from "react-hook-form"
import { InputCheckbox, InputForm } from "../inputs"
import { Button } from "../commons"
import { useAppStore } from "~/store"

const EditRoom = ({ editRoom, setRooms, updateRoom, fromPost }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    setValue,
    watch,
  } = useForm()
  const { convenients, setModal } = useAppStore()
  useEffect(() => {
    if (editRoom) {
      reset({
        title: editRoom.title,
        price: editRoom.price,
        area: editRoom.area,
        stayMax: editRoom.stayMax,
        convenients: editRoom?.rConvenients,
        electricPrice: editRoom?.electricPrice,
        waterPrice: editRoom?.waterPrice,
        garbagePrice: editRoom?.garbagePrice,
        capsPrice: editRoom?.capsPrice,
        internetPrice: editRoom?.internetPrice,
      })
    }
  }, [editRoom])
  const onSubmit = (data) => {
    if (fromPost) {
      updateRoom(editRoom.id, data)
    } else {
      setRooms((prev) => [...prev.filter((el) => el.title !== editRoom.title), data])
    }
    setModal(false, null)
  }

  console.log(watch("convenients"))
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="w-[95%] md:w-[500px] max-h-[95vh] overflow-y-auto p-4 rounded-md bg-white"
    >
      <h1 className="pb-4 text-xl font-bold border-b">Chỉnh sửa / Thêm tiện nghi phòng</h1>
      <form className="py-4 flex flex-col gap-4">
        <InputForm
          register={register}
          id="title"
          errors={errors}
          validate={{ required: "Không được bỏ trống." }}
          title="Tên phòng"
        />
        <InputForm
          register={register}
          id="price"
          errors={errors}
          validate={{ required: "Không được bỏ trống." }}
          title="Giá thuê / tháng"
          type="number"
        />
        <InputForm
          register={register}
          id="electricPrice"
          errors={errors}
          validate={{ required: "Không được bỏ trống." }}
          title="Giá điện / kWh"
          type="number"
        />
        <InputForm
          register={register}
          id="waterPrice"
          errors={errors}
          validate={{ required: "Không được bỏ trống." }}
          title="Giá nước / mét khối"
          type="number"
        />
        <InputForm
          register={register}
          id="garbagePrice"
          errors={errors}
          validate={{ required: "Không được bỏ trống." }}
          title="Gía tiền rác"
          type="number"
        />
        <InputForm
          register={register}
          id="capsPrice"
          errors={errors}
          validate={{ required: "Không được bỏ trống." }}
          title="Giá cáp / tháng"
          type="number"
        />
        <InputForm
          register={register}
          id="internetPrice"
          errors={errors}
          validate={{ required: "Không được bỏ trống." }}
          title="Giá internet / tháng"
          type="number"
        />
        <InputForm
          register={register}
          id="area"
          errors={errors}
          validate={{ required: "Không được bỏ trống." }}
          title="Diện tích"
          type="number"
        />
        <InputForm
          register={register}
          id="stayMax"
          errors={errors}
          validate={{ required: "Không được bỏ trống." }}
          title="Số người ở tối đa"
        />
        <InputCheckbox
          register={register}
          id="convenients"
          errors={errors}
          validate={{ required: "Không được bỏ trống." }}
          title="Tiện nghi"
          options={convenients?.map((el) => ({
            ...el,
            label: el.name,
            value: el.id,
          }))}
          optionsClassName="grid grid-cols-2 gap-4 mt-3"
        />
        <Button onClick={handleSubmit(onSubmit)} className="my-4">
          Cập nhật
        </Button>
      </form>
    </div>
  )
}

export default EditRoom
