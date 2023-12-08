<style>
    .card{
        width: 300px;
        background-color: #efefef;
        padding: 15px;
    }
</style>

<div class="card">
    <slot name="card-head">
        <h2>card head</h2>
    </slot>
    <slot name="card-body">
        <p>card body</p>
    </slot>
</div>