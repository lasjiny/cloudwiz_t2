<template>
    <div class="col-sm-6">
        <div class="card">
            <div class="card-header card-no-border">
                <div class="header-top gap-1">
                    <h5>Sell Coins</h5>
                    <div class="dropdown icon-dropdown">
                        <button class="btn dropdown-toggle" id="selldropdown" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="icon-more-alt"></i>
                        </button>
                        <div class="dropdown-menu dropdown-menu-end" aria-labelledby="selldropdown">
                            <a class="dropdown-item" href="#">Weekly</a><a class="dropdown-item" href="#">Monthly</a><a class="dropdown-item" href="#">Yearly</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card-body pt-0">
                <form class="theme-form crypto-form">
                    <div class="mb-3">
                        <label class="form-label f-light" for="crypto-coin">Enter Crypto Coins</label>
                        <div class="position-relative">
                            <input class="form-control" id="crypto-coin" type="number" placeholder="100" />
                            <select class="form-select crypto-select warning">
                                <option>USD</option>
                                <option>BTC</option>
                                <option>LTC</option>
                                <option>ETH</option>
                            </select>
                        </div>
                    </div>
                    <div class="mb-3">
                        <label class="form-label f-light" for="bitcoin">Enter Money Converted to</label>
                        <div class="position-relative">
                            <input class="form-control" id="bitcoin" type="number" placeholder="0.0043" />
                            <select class="form-select crypto-select primary">
                                <option>LTC</option>
                                <option>USD</option>
                                <option>BTC</option>
                                <option>ETH</option>
                            </select>
                        </div>
                    </div>
                    <button class="btn btn-primary btn-hover-effect w-100" type="button">
                        Sell Coins
                    </button>
                </form>
            </div>
        </div>
    </div>
    </template>
    