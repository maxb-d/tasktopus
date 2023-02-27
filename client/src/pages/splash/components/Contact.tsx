import { SelectedPage } from "@/shared/types"
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'

type Props = {
  setSelectedPage: (value: SelectedPage) => void
}

const Contact = ({ setSelectedPage }: Props) => {
  const inputStyle = `px-5 py-3 mb-5 bg-transparent border-b border-black ml-4 focus:outline-none placeholder-black`
  
  const {
    register,
    trigger,
    formState: { errors }
  } = useForm()

  const onSubmit = async (e: any) => {
    const isValid = await trigger()

    if(!isValid) {
      e.preventDefault()
    }
  }

  return (
    <section
      id='contact'
      className='gap-16 p-10 md:pb-0 bg-blue-logo'
    >
      {/* MAIN HEADER */}
      <motion.div 
        onViewportEnter={() => setSelectedPage(SelectedPage.Contact)}
      >
        {/* HEADER */}
        <div className="flex justify-center items-center">
        <div>
          <p className='text-xl font-bold'>
              <span>Let's talk</span> about your project ...
          </p>
          <p className='my-5'>
            <span className='font-bold'>Ink</span> you're way to success and get organized, never let your tasks slip through your fingers again.
            <br /><br/>Give a <span className='font-bold'>tentacular</span> feedback by contacting us.
            <br/><br/>By <span className='font-bold'>🐙</span>, for <span className='font-bold'>you.</span>
          </p>
        </div>
        </div>

        {/* FORM */}
        <div className="flex justify-center items-center">
          <div className='mt-10 gap-8'>
              <form
                target="_blank"
                onSubmit={onSubmit}
                action="https://formsubmit.co/46878289924994fe88c020c3d579dd3f"
                method="POST"
              >
                <div className="flex justify-center items-center">
                  <div>
                    <input 
                      className={inputStyle}
                      type="text"
                      placeholder='Name*'
                      {...register("name", {
                        required: true,
                        maxLength: 100,
                      })}
                    />
                    {errors.name && (
                      <p className='mt-0 ml-4 text-violet-logo'>
                        {errors.name.type === "required" && "This field is required."}
                        {errors.name.type === "maxLength" && "Max length is a 100 caracters."}
                      </p>
                    )}
                  </div>
                  <div>
                    <input 
                      className={inputStyle}
                      type="text"
                      placeholder='Surname*'
                      {...register("surname", {
                        required: true,
                        maxLength: 100,
                      })}
                    />
                    {errors.surname && (
                      <p className='mt-0 ml-4 text-violet-logo'>
                        {errors.surname.type === "required" && "This field is required."}
                        {errors.surname.type === "maxLength" && "Max length is a 100 caracters."}
                      </p>
                    )}
                  </div>
                </div>
                
                <div className="flex justify-center items-center mt-4">
                  <div>
                    <input 
                      className={inputStyle}
                      type="text"
                      placeholder='Email*'
                      {...register("email", {
                        required: true,
                        pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      })}
                    />
                    {errors.email && (
                      <p className='mt-0 ml-4 text-violet-logo'>
                        {errors.email.type === "required" && "This field is required."}
                        {errors.email.type === "pattern" && "Invalid email adress"}
                      </p>
                    )}
                  </div>
                  <div>
                    <input 
                      className={inputStyle}
                      type="tel"
                      placeholder='Phone*'
                      {...register("phone", {
                        required: true,
                        maxLength: 12
                      })}
                    />
                    {errors.phone && (
                      <p className='mt-0 ml-4 text-violet-logo'>
                        {errors.phone.type === "required" && "This field is required."}
                        {errors.phone.type === "maxLength" && "Invalid phone number"}
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex-col justify-center items-center mt-6">
                  <textarea 
                    className='px-5 py-3 mb-5 bg-transparent border border-black ml-4 focus:outline-none placeholder-black'
                    rows={4}
                    cols={50}
                    placeholder='Message*'
                    {...register("message", {
                      required: true,
                      maxLength: 2000,
                    })}
                  />
                  {errors.message && (
                    <p className='mt-0 ml-4 text-violet-logo'>
                      {errors.message.type === "required" && "This field is required."}
                      {errors.message.type === "maxLength" && "Max length is a 2000 caracters."}
                    </p>
                  )}
                </div>
                <div className="flex justify-end items-end mb-4">
                  <button
                    className="hover:border-b-2 hover:border-black"
                    type="submit"
                  >
                    SUBMIT
                  </button>
                </div>
              </form>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Contact