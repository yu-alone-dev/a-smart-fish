<script>
    import { base } from '$app/paths';
    import Container from '$lib/components/Container.svelte';
    import Spacer from '$lib/components/Spacer.svelte';
    import Image from '$lib/components/Image.svelte';
    import Button from '$lib/components/Button.svelte';
    
    const download = 'Скачать'
    const docs = [
        [
            'https://drive.google.com/uc?export=download&id=1v-kqEc38vLHLOFt6u4yjckpZpCT1x9hL',
            'https://drive.google.com/uc?export=download&id=1C-R4iyJjx-r-j38xzdUEJFRUCkvwYawC'
        ],
        [
            'https://drive.google.com/uc?export=download&id=1s7RvTsWFiCeogfk5OKWxJB5Itxx7n_gc',
            'https://drive.google.com/uc?export=download&id=1rBye5QKkR9azFWTeDntxHvrae9rF5G6Q'
        ],
        [
            'https://drive.google.com/uc?export=download&id=1aUkcswjbFpZ1kL4Eme4Sf2XyCWzvIg8j',
            'https://drive.google.com/uc?export=download&id=1Hq8bjusA2pxTG4SyH0GqX6T_16MXQCdo'
        ]
    ];
</script>


<div class="center">
    <Container class="cards">
        {#each docs as doc, doc_index}
            {#if doc_index > 0}
                <Spacer axis="vertical" size="1rem"/>
            {/if}
            <Container orientation="horizontal">
                {#each doc as element, element_index}
                    {#if element_index > 0}
                        <Spacer axis="horizontal" size="2rem"/>
                    {/if}
                    <Container>
                        <Image
                            page='materials/docs'
                            src={`docs_${doc_index * doc.length  + element_index + 1}.png`}
                            size='large'
                        />
                        <Spacer axis="vertical" size="0.5rem"/>
                        <Button 
                            title={download}
                            href={base + element}
                        />
                    </Container>
                {/each}
            </Container>
        {/each}
    </Container>
</div>
