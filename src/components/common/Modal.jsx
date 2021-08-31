import React from 'react'
import { InlineIcon } from '@iconify/react'
import trashCanOutline from '@iconify-icons/mdi/trash-can-outline'
import { deletePlan } from '../../service/client/Plan'
import { deleteCommission } from '../../service/client/Commision'
export default function Modal(obj) {
  const [showModal, setShowModal] = React.useState(false)
  const deleteFunc = ()=>{
    
    switch(obj.page){
      case 'plan':
        
        deletePlan(obj.id).then(res => {
          if (!res?.data.error){
             alert(res.data.message)
             setShowModal(false)
          }
        }).catch(err =>  console.log(err))
        break
      case 'agent':
        // deleteCommission(obj.id).then(res => {
        //   if (!res?.data.error){
        //      alert(res.data.message)
        //      setShowModal(false)
        //   }
        // }).catch(err =>  console.log(err))
        break
      case 'commission':
         deleteCommission(obj.id).then(res => {
          if (!res?.data.error){
             alert(res.data.message)
             setShowModal(false)
          }
        }).catch(err =>  console.log(err))
        break
        
        
    }
  
  }
  
  return (
    <>
    <button className="hover:text-red-default"
    onClick={() => setShowModal(true)}>
				<InlineIcon icon={trashCanOutline} />
		</button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Delete
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                    Are you sure to delete? 
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={deleteFunc}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  )
}