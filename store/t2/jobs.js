import Jobs from "~/data/t2/jobs.json"
export const useJobStore = defineStore({
	id: 'job',
	state:()=>{
		return{

			jobs : Jobs.jobs
		}

	}
})
