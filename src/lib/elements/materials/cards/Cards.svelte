<script>
    import { base } from '$app/paths';
    import ListContainer from '$lib/components/ListContainer.svelte';
    import Container from '$lib/components/Container.svelte';
    import Spacer from '$lib/components/Spacer.svelte';
    import Image from '$lib/components/Image.svelte';
    import Button from '$lib/components/Button.svelte';
    
    let items = Array.from({ length: 6 }, (_, i) => ({
        id: i,
        imageSrc: `fish_${i+1}.png`
    }));

    const title = "Скачать карточки"
    const href = "https://drive.google.com/uc?export=download&id=1iC8jNpQCcDc8FcseEbqY5FUsGpHnB4rU"
</script>

<div class="center">
  <Container>
    <ListContainer 
      items={items}
      autoPlay={true}
      autoPlayInterval={7000}
      showProgress={true}
      showNavigation={true}
      height="50%"
    >
      <svelte:fragment let:item>
          <Image page='materials/cards' src={item.imageSrc}/>
      </svelte:fragment>
    </ListContainer>
    <Spacer axis="vertical" size="2rem"/>
    <Button 
      title={title}
      href={href}
    />
  </Container>
</div>