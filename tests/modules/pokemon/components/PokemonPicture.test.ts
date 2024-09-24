import PokemonPicture from '@/modules/pokemon/components/PokemonPicture.vue';
import { mount } from '@vue/test-utils';

describe('<PokemonPricture />', () => {
  const imageSource =
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg';

  test('should render the hidden image when showPokemon props is false', async () => {
    const wrapper = mount(PokemonPicture, {
      props: { pokemonId: 25, showPokemon: false },
    });

    const image = wrapper.find('img');
    const attributes = image.attributes();

    expect(attributes).toEqual(
      expect.objectContaining({
        class: 'brightness-0 h-[200px]',
        src: imageSource,
      }),
    );
  });

  test('should render the image when showPokemon props is true', async () => {
    const wrapper = mount(PokemonPicture, {
      props: { pokemonId: 25, showPokemon: true },
    });

    const image = wrapper.find('img');
    const attributes = image.attributes();

    expect(attributes).toEqual(
      expect.objectContaining({
        alt: 'pokemon image',
        class: 'fade-in h-[200px]',
        src: imageSource,
      }),
    );
  });
});
