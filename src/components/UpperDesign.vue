<template>
    <div class="upperdesign">

        <div class="upperdesign-container">
            <div class="upperdesign-inner-container">

                <div class="upperdesign-inner-container-one">
                    <div class="number">
                        <div class="number-icon"></div>
                        <div class="number-value"></div>
                    </div>
                    <div class="mail"><p>B</p></div>
                </div>
                <div class="upperdesign-inner-container-two"></div>

            </div>
        </div>

    </div>
</template>

<script>
    export default{
        name: 'UpperDesign',
    }

</script>

<style scoped>
    .upperdesign-container{
        display:flex;
        justify-content: center;
        background-color: DodgerBlue;
    }
    .upperdesign-inner-container{
        display:flex;
        width: 90%;
        padding: 1% 0%;
        background-color:antiquewhite;
    }

    .upperdesign-inner-container-one{
        display:flex;
        width: 50%;
        padding: 1% 0%;
        background-color:blueviolet;
    }
    .number{
        display:flex;
        width: 50%;
        padding: 1% 0%;
        background-color:chartreuse;
    }
    .number-icon{
        width: 20%;
        padding: 1% 0%;
        background-color:darkorchid;
    }
    .number-value{
        width: 80%;
        padding: 1% 0%;
        background-color:darkblue;
    }
    .mail{
        display:flex;
        width: 50%;
        padding: 1% 0%;
        background-color:brown;
    }
    .upperdesign-inner-container-two{
        width: 50%;
        padding: 1% 0%;
        background-color:cornsilk;
    }

</style>