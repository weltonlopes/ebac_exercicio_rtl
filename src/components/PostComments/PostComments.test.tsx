import { fireEvent, render, screen } from '@testing-library/react';
import Post from '.';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    it('Deve renderizar o comentário "que legal"', () => {
        render(<PostComment/>);
        fireEvent.change(screen.getByTestId('campo-comentario'), {
            target: {
                value: 'que legal'
            }
        })
        fireEvent.click(screen.getByTestId('botao-comentar'))
        expect(screen.getByText('que legal')).toBeInTheDocument()
    })

    it('Deve renderizar o comentário "que maneiro"', () => {
        render(<PostComment/>);
        fireEvent.change(screen.getByTestId('campo-comentario'), {
            target: {
                value: 'que maneiro'
            }
        })
        fireEvent.click(screen.getByTestId('botao-comentar'))
        expect(screen.getByText('que maneiro')).toBeInTheDocument()
    })
});
