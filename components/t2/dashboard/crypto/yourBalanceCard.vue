<template>
    <div class="col-xxl-12 col-sm-6 box-col-6">
        <div class="card balance-box">
            <div class="card-body">
                <div class="balance-profile">
                    <div class="balance-img">
                        <img src="/images/dashboard-4/user.png" alt="user vector" /><a class="edit-icon">
                            <NuxtLink to="/users/profile"><svg>
                                    <use href="@/assets/t2/svg/icon-sprite.svg#pencil"></use>
                                </svg></NuxtLink>
                        </a>
                    </div>
                    <span class="f-light d-block">Your Balance </span>
                    <h5 class="mt-1">$768,987.90</h5>
                    <ul>
                        <li>
                            <div class="balance-item danger">
                                <div class="balance-icon-wrap">
                                    <div class="balance-icon">
                                        <i data-feather="arrow-down-right"></i>
                                    </div>
                                </div>
                                <div>
                                    <span class="f-12 f-light">Investment </span>
                                    <h5>78.8K</h5>
                                    <span class="badge badge-light-danger rounded-pill">-11.67%</span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="balance-item success">
                                <div class="balance-icon-wrap">
                                    <div class="balance-icon">
                                        <i data-feather="arrow-up-right"></i>
                                    </div>
                                </div>
                                <div>
                                    <span class="f-12 f-light">Cash Back</span>
                                    <h5>19.7K</h5>
                                    <span class="badge badge-light-success rounded-pill">+10.67%</span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
    