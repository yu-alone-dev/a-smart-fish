<script>
    import { base } from '$app/paths';
    import Container from '$lib/components/Container.svelte';
    import Spacer from '$lib/components/Spacer.svelte';
    import Image from '$lib/components/Image.svelte';
    import Button from '$lib/components/Button.svelte';
    
    const download = 'Скачать'
    const download_link = 'https://drive.google.com/uc?export=download&id=1DVxfe-qiwp7S0H_p7xrRKQ0vUHkDsE4k';
</script>


<div class="center">
    <Container class="cards">
        {#each Array(2) as _, doc_index}
            {#if doc_index > 0}
                <Spacer axis="vertical" line={true} size="3rem" thickness="3px"/>
            {/if}
            <Container orientation="horizontal">
                {#each Array(2) as _, element_index}
                    {#if element_index > 0}
                        <Spacer axis="horizontal" size="2rem"/>
                    {/if}
                    <Container>
                        <Image
                            page='materials/tests'
                            src={`tests_${doc_index * 2 + element_index + 1}.png`}
                            size='large'
                        />
                    </Container>
                {/each}
            </Container>
        {/each}
        <Button 
            title={download}
            href={base + download_link}
        />
    </Container>
</div>
