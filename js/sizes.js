
let sizes=Array.from(document.getElementsByClassName('sizes'))
let colors=Array.from(document.getElementsByClassName('colors'))
let photes=Array.from(document.getElementsByClassName('photes'))
// Add centering classes to all photos initially
photes.forEach(photo => {
    photo.classList.add('d-flex', 'justify-content-center', 'align-items-center', 'mx-auto');
});

sizes.forEach(size => {
    size.addEventListener('click', () => {
    console.log(size.value);
    console.log(photes.length);

    switch(size.value){
        case 'XS':
            photes.forEach(photo => {
                photo.classList.remove('w-25', 'w-50', 'w-75', 'w-100', 'h-25', 'h-50', 'h-75', 'h-100');
                photo.classList.add('w-25', 'h-25');
            });
            break;
        case 'S':
            photes.forEach(photo => {
                photo.classList.remove('w-25', 'w-50', 'w-75', 'w-100', 'h-25', 'h-50', 'h-75', 'h-100');
                photo.classList.add('w-25', 'h-25');
            });
            break;
        case 'M':
            photes.forEach(photo => {
                photo.classList.remove('w-25', 'w-50', 'w-75', 'w-100', 'h-25', 'h-50', 'h-75', 'h-100');
                photo.classList.add('w-50', 'h-50');
            });
            break;
        case 'L':
            photes.forEach(photo => {
                photo.classList.remove('w-25', 'w-50', 'w-75', 'w-100', 'h-25', 'h-50', 'h-75', 'h-100');
                photo.classList.add('w-75', 'h-75');
            });
            break;
        case 'XL':
            photes.forEach(photo => {
                photo.classList.remove('w-25', 'w-50', 'w-75', 'w-100', 'h-25', 'h-50', 'h-75', 'h-100');
                photo.classList.add('w-100', 'h-100');
            });
            break;
           
        
        default:
            photes.forEach(photo => {
                photo.classList.remove('w-25', 'w-50', 'w-75', 'w-100', 'h-25', 'h-50', 'h-75', 'h-100');
                photo.classList.add('w-100', 'h-100');
            });
    }
    })}
)

colors.forEach(color => {
    color.addEventListener('click', () => {
        console.log(color.value);
        console.log(photes.length);

        switch(color.value){
            case 'black':
                photes.forEach(photo => {
                    photo.classList.remove('bg-primary', 'bg-secondary', 'bg-success', 'bg-danger', 'bg-warning', 'bg-info', 'bg-light', 'bg-dark');
                    photo.classList.add('bg-dark');
                });
                break;
            case 'white':
                photes.forEach(photo => {
                    photo.classList.remove('bg-primary', 'bg-secondary', 'bg-success', 'bg-danger', 'bg-warning', 'bg-info', 'bg-light', 'bg-dark');
                    photo.classList.add('bg-light');
                });
                break;
            case 'red':
                photes.forEach(photo => {
                    photo.classList.remove('bg-primary', 'bg-secondary', 'bg-success', 'bg-danger', 'bg-warning', 'bg-info', 'bg-light', 'bg-dark');
                    photo.classList.add('bg-danger');
                });
                break;
            case 'green':
                photes.forEach(photo => {
                    photo.classList.remove('bg-primary', 'bg-secondary', 'bg-success', 'bg-danger', 'bg-warning', 'bg-info', 'bg-light', 'bg-dark');
                    photo.classList.add('bg-success');
                });
                break;
            case 'blue':
                photes.forEach(photo => {
                    photo.classList.remove('bg-primary', 'bg-secondary', 'bg-success', 'bg-danger', 'bg-warning', 'bg-info', 'bg-light', 'bg-dark');
                    photo.classList.add('bg-primary');
                });
                break;
            default:
                photes.forEach(photo => {
                    photo.classList.remove('bg-primary', 'bg-secondary', 'bg-success', 'bg-danger', 'bg-warning', 'bg-info', 'bg-light', 'bg-dark');
                });
                break;
        }
    });
});