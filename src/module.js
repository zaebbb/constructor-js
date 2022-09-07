import image from './assets/image.jpg'
import { TextBlock, ImageBlock, ColumnsBlock, TitleBlock } from './classes/blocks'

export const model = [
    new TitleBlock('Hello world from JS', {
        tag: 'h2',
        styles: {
            background: 'linear-gradient(to right,red, blue)',
            color: "#fff",
            padding: '1.5rem',
            'text-align': 'center'
        }
    }),
    new TextBlock('lorem ipsum dolor sit amet, consectetur adipiscing', {
        styles: {
            padding: '1rem',
            'font-size': '25px'
        }
    }),
    new ColumnsBlock([
        'stroke 1',
        'stroke 2',
        'stroke 3',
        'stroke 4',
        'stroke 5'
    ],{
        styles: {
            'font-weight': '700',
            'text-align': 'center',
            'border': '1px solid #000'
        }
    }),
    new ImageBlock(image,{
        imagesStyles: {
            margin: 'auto',
            width: '500px'
        },
        styles: {
            display: 'flex',
            'justify-content': 'center',
            padding: '1rem'
        }
    })
]
