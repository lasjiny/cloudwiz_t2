<template>
    <div class="fade tab-pane" id="pills-tasks" role="tabpanel" aria-labelledby="pills-tasks-tab">
        <div class="card mb-0">
            <div class="card-header d-flex">
                <h5 class="mb-0">My tasks</h5><a href="javascript:void(0)"><vue-feather class="me-2"
                        type="printer"></vue-feather>Print</a>
            </div>
            <div class="card-body p-0">
                <div class="taskadd">
                    <div class="table-responsive">
                        <table class="table">
                            <tr v-for="index in 5" :key="index">
                                <td>
                                    <h6 class="task_title_0 mb-0">Kanban Design</h6>
                                    <p class="project_name_0">Page</p>
                                </td>
                                <td>
                                    <p class="task_desc_0">kanban board is one of the tools that can be used to implement
                                        kanban to manage.</p>
                                </td>
                                <td><a class="me-2" href="javascript:void(0)"><vue-feather type="link"></vue-feather></a><a
                                        href="javascript:void(0)"><i type="more-horizontal"></i></a></td>
                                <td><a href="javascript:void(0)"><vue-feather type="trash-2"></vue-feather></a></td>
                            </tr>

                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState } from 'pinia'
import { useTagStore } from '~/store/t2/tags';
export default {

    computed: {
        ...mapState(useTagStore, {
            tags: 'tags',
        }),
        activeTab() {
            return useTagStore().activeclass
        }
    },
    methods: {

        basic_warning_alert: function (item) {
            this.$swal({
                icon: 'warning',
                title: "Are you sure?",
                text: 'Once deleted, you will not be able to recover this imaginary file!',
                showCancelButton: true,
                confirmButtonText: 'Ok',
                confirmButtonColor: '#e64942',
                cancelButtonText: 'Cancel',
                cancelButtonColor: '#efefef',
            }).then((result) => {
                if (result.value) {
                    this.tags.splice(item, 1)
                    this.$swal({
                        icon: 'success',
                        text: 'Poof! Your imaginary file has been deleted!',
                        type: 'success',

                    });
                } else {
                    this.$swal({
                        text: 'Your imaginary file is safe!'
                    });
                }
            });
        }
    }
}

</script>